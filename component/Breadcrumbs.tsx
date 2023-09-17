import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const pathNameMapping = {
  mypage: "マイページ",
  learning: "学習中コース",
  // 他のルートもここに追加
};

const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);

  return (
    <nav>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const name = pathNameMapping[value] || value; // もしマッピングが存在しない場合は、元の値をそのまま表示

        return (
          <span key={to}>
            {last ? (
              name
            ) : (
              <>
                <Link href={to}>{name}</Link>
                <span> / </span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
