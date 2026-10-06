import CreateForm from '@/components/create/CreateForm';
import { leaderContext } from '@/lib/server/leader-page';
import { getLeaderRequest } from '@/lib/server/requests';
import { currentVersionOf } from '@/lib/server/templates';

export const dynamic = 'force-dynamic';

export default async function LeaderCreatePage({ params, searchParams }: { params: Promise<{ templateId: string }>; searchParams: Promise<{ edit?: string }> }) {
  const { leader, templates } = await leaderContext();
  const { templateId } = await params;
  const { edit } = await searchParams;
  const req = edit && /^[0-9a-f-]{36}$/.test(edit) ? await getLeaderRequest(leader.id, edit).catch(() => null) : null;
  // The request (or an old link) may point at an earlier template version; continue on the current one.
  const wanted = req?.templateId ?? templateId;
  const current = /^[0-9a-f-]{36}$/.test(wanted) ? ((await currentVersionOf(wanted)) ?? wanted) : wanted;
  return (
    <CreateForm
      mode="leader"
      templates={templates}
      homeHref="/leader"
      roleLine={`${leader.name} · قائد`}
      initialTemplateId={current}
      edit={
        req && req.status === 'changes_requested'
          ? {
              requestId: req.id,
              color: req.color,
              stamp: req.stamp,
              showQr: req.showQr,
              place: req.place,
              peopleText: req.people.map((p) => [p.name, p.org, p.title].filter(Boolean).join(' — ')).join('\n'),
              note: req.note,
            }
          : undefined
      }
    />
  );
}
