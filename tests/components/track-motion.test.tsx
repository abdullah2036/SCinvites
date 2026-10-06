import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import TrackMotion, { TRACK_MODULES } from '@/components/invitation/motion/TrackMotion';
import { TRACKS } from '@/lib/shared/types';

describe('<TrackMotion>', () => {
  it('loads only the requested track module', async () => {
    const spies = Object.fromEntries(TRACKS.map((t) => [t, vi.spyOn(TRACK_MODULES, t)]));
    render(<TrackMotion track="phys" kind="scene" />);
    await waitFor(() => expect(document.querySelector('[data-track="phys"][data-kind="scene"]')).toBeInTheDocument());
    for (const t of TRACKS) expect(spies[t].mock.calls.length > 0, t).toBe(t === 'phys');
    for (const s of Object.values(spies)) s.mockRestore();
  });

  it.each(TRACKS)('renders the %s scene and loader', async (track) => {
    const { unmount } = render(
      <>
        <TrackMotion track={track} kind="scene" />
        <TrackMotion track={track} kind="loader" />
      </>,
    );
    await waitFor(() => {
      expect(document.querySelector(`[data-track="${track}"][data-kind="scene"]`)?.childElementCount).toBeGreaterThan(0);
      expect(document.querySelector(`[data-track="${track}"][data-kind="loader"]`)?.childElementCount).toBeGreaterThan(0);
    });
    unmount();
  });

  it('chemistry spells SCUQU with real element numbers and a gold Q cell', async () => {
    render(<TrackMotion track="chem" kind="scene" />);
    await waitFor(() => expect(screen.getAllByText('S').length).toBeGreaterThan(0));
    for (const n of ['16', '6', '92']) expect(screen.getAllByText(n).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Q').length).toBeGreaterThan(0);
    expect(screen.getAllByText('كبريت').length).toBeGreaterThan(0);
  });
});
