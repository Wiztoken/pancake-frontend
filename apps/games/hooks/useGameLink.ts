import { useMatchBreakpoints } from '@pancakeswap/uikit'
import { useMemo } from 'react'

import { getGameLink } from 'utils/getGameLink'

export function useGameLink(gameId: string) {
  const { isMobile } = useMatchBreakpoints()

  return useMemo(() => getGameLink({ gameId, isMobile }), [isMobile, gameId])
}