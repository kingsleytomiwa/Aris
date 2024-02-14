

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const LANGS = ['en', 'tr'];

export function useSetLanguage() {
    const router = useRouter();
    let pathname = usePathname();
    const searchParams = useSearchParams();

    return (locale: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
        const search = current.toString();
        const query = search ? `?${search}` : '';

        for (const lang of LANGS) {
            if (pathname.startsWith(`/${lang}/`)) {
                pathname = pathname.replace(`/${lang}`, '');
                break;
            }
        }

        pathname = `/${locale}${pathname}`;

        router.push(`${pathname}${query}`);
    };
}
