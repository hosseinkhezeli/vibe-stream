// features/home/home-page.tsx
import { PlaylistRow } from "./sections/playlist-row";

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
    imageUrl: "/images/playlists/focus.jpg",
  },
  {
    id: "rp-2",
    title: "هیپ‌هاپ فارسی",
    description: "جدیدترین ترک‌های رپ فارسی",
    imageUrl: "/images/playlists/hiphop-fa.jpg",
  },
  {
    id: "rp-3",
    title: "چیل شبانه",
    description: "آهنگ‌های آرام برای آخر شب",
    imageUrl: "/images/playlists/chill-night.jpg",
  },
  {
    id: "rp-4",
    title: "پادکست‌های توسعه‌دهندگان",
    description: "گفتگو با مهندسان نرم‌افزار",
    imageUrl: "/images/playlists/dev-podcasts.jpg",
  },
  {
    id: "rp-5",
    title: "EDM برای ورزش",
    description: "انرژی بالا برای باشگاه",
    imageUrl: "/images/playlists/edm-gym.jpg",
  },
];

const madeForYou: PlaylistLike[] = [
  {
    id: "mf-1",
    title: "دیسکاور هفتگی",
    description: "بر اساس سلیقه‌ی شنیداری تو",
    imageUrl: "/images/playlists/discover-weekly.jpg",
  },
  {
    id: "mf-2",
    title: "ریمیکس‌های محبوب تو",
    description: "بر اساس ترک‌هایی که دوست داشتی",
    imageUrl: "/images/playlists/remix.jpg",
  },
  {
    id: "mf-3",
    title: "لیست تمرکز اختصاصی",
    description: "ترک‌های بی‌کلام برای تمرکز",
    imageUrl: "/images/playlists/focus-custom.jpg",
  },
];

const popularPlaylists: PlaylistLike[] = [
  {
    id: "pp-1",
    title: "تاپ جهانی امروز",
    description: "داغ‌ترین ترک‌ها در دنیا",
    imageUrl: "/images/playlists/top-global.jpg",
  },
  {
    id: "pp-2",
    title: "تاپ ایران امروز",
    description: "محبوب‌ترین آهنگ‌ها در ایران",
    imageUrl: "/images/playlists/top-iran.jpg",
  },
  {
    id: "pp-3",
    title: "کلاسیک‌های جاودانه",
    description: "آهنگ‌های ماندگار نسل‌ها",
    imageUrl: "/images/playlists/classics.jpg",
  },
  {
    id: "pp-4",
    title: "لوفی برای مطالعه",
    description: "لوفی بیت برای تمرکز و مطالعه",
    imageUrl: "/images/playlists/lofi.jpg",
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
