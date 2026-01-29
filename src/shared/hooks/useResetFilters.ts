import { useSearchStore } from "@/store/useSearchStore"
import { useСategoryStore } from "@/store/useСategoryStore"

export const useResetFilters = () => {
   const { setSelectedCategory } = useСategoryStore()
   const { reset } = useSearchStore()
   return () => {
      setSelectedCategory('all')
      reset()
   }
}