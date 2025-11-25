import {
  FOOTER_DATA_LIST,
  FOOTER_SOCIAL_ICONS,
  FOOTER_LINKS,
} from "../common/Helper";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050033] text-white px-4 md:px-14 xl:px-[60px]">
      <div className="pt-4 pb-12 md:pb-14 xl:pb-16 xl:px-16">
        <hr className="opacity-60" />
        <hr className="opacity-20 my-5 xl:my-8" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 py-2">
          {FOOTER_DATA_LIST.map((obj) => (
            <div key={obj.title}>
              <h3 className="font-semibold mb-4">{obj.title}</h3>

              <ul className="space-y-2">
                {obj.links.map((link) => (
                  <li
                    key={link}
                    className="text-sm opacity-80 hover:opacity-100 cursor-pointer mb-3"
                  >
                    <a href={obj.url}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="opacity-20 my-5 xl:my-8" />
        <div className="flex items-center justify-center gap-6 xl:py-2">
          {FOOTER_SOCIAL_ICONS.map((item) => (
            <div key={item.name} className="flex items-center justify-center">
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6"
              >
                {item.svg}
              </a>
            </div>
          ))}
        </div>
        <hr className="opacity-20 my-5 xl:my-8" />
        <div className="flex items-center justify-center flex-wrap gap-5 xl:gap-8 text-white py-4 text-[10px] sm:text-sm">
          {FOOTER_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:underline whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-5 justify-center pt-4 pb-2">
          <p className="text-[#8d88b4] text-xs sm:text-sm">
            © Accor{new Date().getFullYear()}
          </p>
          <p className="text-[#8d88b4] text-xs sm:text-sm">
            沪ICP备10203162号-7
          </p>
        </div>
        <div className="flex gap-5 justify-center my-2">
          <Image
            src="/images/jpg/logo-fevad.jpg"
            alt="Description of my remote image"
            width={42}
            height={42}
          />
          <Image
            src="/images/jpg/logo-fevad.jpg"
            alt="Description of my remote image"
            width={42}
            height={42}
          />
        </div>
      </div>
    </footer>
  );
}
