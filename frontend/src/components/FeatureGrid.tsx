import { TicketsPlane, ShieldCheck, ThumbsUp, Banknote } from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: (
        <TicketsPlane className="mb-[30px] h-[70px] w-[70px] transform border-[3px] border-rose-500 p-3 font-normal text-rose-500 transition duration-400 ease-in-out group-hover:scale-x-[-1] group-hover:bg-rose-500 group-hover:text-zinc-50" />
      ),
      title: "Visa Langsung",
      description:
        "DALLAS adalah Provider Visa yang bekerjasama langsung dengan Kedutaan Arab Saudi.",
    },
    {
      icon: (
        <ShieldCheck className="mb-[30px] h-[70px] w-[70px] transform border-[3px] border-rose-500 p-3 font-normal text-rose-500 transition duration-400 ease-in-out group-hover:scale-x-[-1] group-hover:bg-rose-500 group-hover:text-zinc-50" />
      ),
      title: "Resmi dan Aman",
      description:
        "DALLAS adalah Penyelenggara Umroh berizin RESMI yang berkomitmen terhadap 5 Pasti Umroh.",
    },
    {
      icon: (
        <ThumbsUp className="mb-[30px] h-[70px] w-[70px] transform border-[3px] border-rose-500 p-3 font-normal text-rose-500 transition duration-400 ease-in-out group-hover:scale-x-[-1] group-hover:bg-rose-500 group-hover:text-zinc-50" />
      ),
      title: "Terjamin Syari'ah",
      description:
        "DALLAS adalah Penyelenggara Umroh yang dijamin oleh lembaga penjaminan Syari'ah Milik Pemerintah (Askrindo Syariah).",
    },
    {
      icon: (
        <Banknote className="mb-[30px] h-[70px] w-[70px] transform border-[3px] border-rose-500 p-3 font-normal text-rose-500 transition duration-400 ease-in-out group-hover:scale-x-[-1] group-hover:bg-rose-500 group-hover:text-zinc-50" />
      ),
      title: "Bergaransi Penuh",
      description: "Dallas memberikan garansi 100% uang kembali.",
    },
  ];

  return (
    <section className="relative flex w-full items-center justify-center bg-zinc-900 px-[12px] py-[85px] text-zinc-50">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        <h2 className="font-merriweather-sans mb-10 text-center text-2xl font-bold sm:text-4xl">
          Kenapa Harus Pilih Dallas?
        </h2>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 xl:flex-row xl:items-start xl:justify-around">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-lg p-6 text-center text-base"
            >
              {feature.icon}
              <h3 className="font-merriweather-sans mb-2 text-2xl font-semibold text-nowrap">
                {feature.title}
              </h3>
              <p className="text-base text-wrap">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
