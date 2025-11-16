import { PlaylistRow } from "./components/playlist-row";

type PlaylistLike = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const recentlyPlayed: PlaylistLike[] = [
  {
    id: "rp-1",
    title: "برای تمرکز",
    description: "آهنگ‌های ملایم برای کدنویسی",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/af585bf2-2271-4ec0-9e61-4a10afc4aafb.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "rp-2",
    title: "هیپ‌هاپ فارسی",
    description: "جدیدترین ترک‌های رپ فارسی",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/0c1c18fe-5a4f-4faf-b2ac-442d1ab99156.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "rp-3",
    title: "چیل شبانه",
    description: "آهنگ‌های آرام برای آخر شب",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/0cf21cfc-afe0-4b0e-b18d-24feafd72f5a.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "rp-4",
    title: "پادکست‌های توسعه‌دهندگان",
    description: "گفتگو با مهندسان نرم‌افزار",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/08671957-7168-4ffe-b578-415ae78f3c68.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "rp-5",
    title: "EDM برای ورزش",
    description: "انرژی بالا برای باشگاه",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/4e325eef-a0e9-48a0-a787-89ec2efafa8f.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
];

const madeForYou: PlaylistLike[] = [
  {
    id: "mf-1",
    title: "دیسکاور هفتگی",
    description: "بر اساس سلیقه‌ی شنیداری تو",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/4e325eef-a0e9-48a0-a787-89ec2efafa8f.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "mf-2",
    title: "ریمیکس‌های محبوب تو",
    description: "بر اساس ترک‌هایی که دوست داشتی",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/08671957-7168-4ffe-b578-415ae78f3c68.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "mf-3",
    title: "لیست تمرکز اختصاصی",
    description: "ترک‌های بی‌کلام برای تمرکز",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/0cf21cfc-afe0-4b0e-b18d-24feafd72f5a.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
];

const popularPlaylists: PlaylistLike[] = [
  {
    id: "pp-1",
    title: "تاپ جهانی امروز",
    description: "داغ‌ترین ترک‌ها در دنیا",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/af585bf2-2271-4ec0-9e61-4a10afc4aafb.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "pp-2",
    title: "تاپ ایران امروز",
    description: "محبوب‌ترین آهنگ‌ها در ایران",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/0cf21cfc-afe0-4b0e-b18d-24feafd72f5a.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "pp-3",
    title: "کلاسیک‌های جاودانه",
    description: "آهنگ‌های ماندگار نسل‌ها",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/08671957-7168-4ffe-b578-415ae78f3c68.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
  {
    id: "pp-4",
    title: "لوفی برای مطالعه",
    description: "لوفی بیت برای تمرکز و مطالعه",
    imageUrl:
      "https://cdn.audiom.ir/ava-cover/audiom/ava-thumbnail/0c1c18fe-5a4f-4faf-b2ac-442d1ab99156.webp?zb_dmn=apr&zb_svc=audiom-prod&zb_scm=https&zb_type=internal",
  },
];

export function HomePage() {
  return (
    <div className="space-y-8">
      <PlaylistRow
        title="پخش‌های اخیر"
        subtitle="به گوش دادن ادامه بده از جایی که رها کردی"
        items={recentlyPlayed}
      />

      <PlaylistRow
        title="مخصوص تو"
        subtitle="پلی‌لیست‌هایی که براساس سلیقه‌ات ساخته شده‌اند"
        items={madeForYou}
      />

      <PlaylistRow
        title="پلی‌لیست‌های محبوب"
        subtitle="آنچه الان همه گوش می‌کنند"
        items={popularPlaylists}
      />
    </div>
  );
}
