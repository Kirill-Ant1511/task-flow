'use client'
import type { TRootState } from '@/store/store'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
