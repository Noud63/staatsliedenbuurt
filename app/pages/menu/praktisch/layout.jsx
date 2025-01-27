import IconsMenu from "@/components/praktisch/IconsMenu";

export default function PraktischLayout({ children }) {
  return (
    <div className="mt-8 px-6 text-white max-sm:mt-4 max-sm:px-4">
      <div className="flex justify-center border-b-2 text-2xl font-semibold tracking-wide">
        <div className="px-4 pb-4">Praktische informatie</div>
      </div>

      <IconsMenu />

      <main>{children}</main>
    </div>
  );
}
