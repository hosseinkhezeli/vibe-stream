import { LucideProps } from "lucide-react"
import { Locale } from "next-intl"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type PageProps<TParams = {}, TSearchParams = {}> = {
    params: { locale: Locale } & TParams,
    searchParams: TSearchParams
}

export type PagePropsWithId<TSearchParams = {}> = PageProps<{ id: string }, TSearchParams>

export type Icon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>