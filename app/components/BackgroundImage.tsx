import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0">
      <Image
        src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/blog.jpg"
        alt=""
        fill
        className="object-cover scale-110 blur-[2px]"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
