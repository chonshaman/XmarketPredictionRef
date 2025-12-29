import svgPaths from "./svg-2oo120g6p8";
import imgCommingSoonImg from "figma:asset/be6b063a689ca94d4300c804bec04a9f515f4272.png";
import imgImage from "figma:asset/14992a95af9c9155867f3f0fde3e15d81d17628f.png";
import imgAvatar from "figma:asset/7690b5c6cf5742d2cf4580ca2de72103e5ef4c77.png";
import imgImage1 from "figma:asset/59095cc9279f370523c45227f456bebcdf9f8406.png";
import imgImage2 from "figma:asset/bd0f019d44bc9f9a5ddacb347b4e651a4723bad8.png";
import imgImage3 from "figma:asset/a28e9ef3aedd597c0a71aa56cc7642c12710dafb.png";

function Bookmark() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="bookmark">
      <div className="absolute bottom-[-5%] left-1/4 right-[5%] top-[15%]" data-name="Vector">
        <div className="absolute inset-[-3.89%_-5%]" style={{ "--stroke-0": "rgba(2, 6, 23, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 19.4">
            <path d={svgPaths.p96fec00} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <Bookmark />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Icon />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[40px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.225px]">Watchlist</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame21 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[16px] w-[796px]">Engage. Predict. Earn: Your Data-Driven Lens into live markets</p>
    </div>
  );
}

function CommingSoonImg() {
  return (
    <div className="absolute h-[204px] left-[938px] top-[36px] w-[395.636px]" data-name="comming soon img">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[124.08%] left-[19.28%] max-w-none top-[-12.04%] w-[60.72%]" src={imgCommingSoonImg} />
      </div>
    </div>
  );
}

function MarketBuzzTitle() {
  return (
    <div className="content-stretch flex h-[196px] items-end justify-between max-w-[1296px] pb-0 pt-[36px] px-0 relative shrink-0 w-full" data-name="Market Buzz Title">
      <Frame22 />
      <CommingSoonImg />
    </div>
  );
}

function CategoryLabel() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap">Politics</p>
    </div>
  );
}

function Clock() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 z-[2]" data-name="clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="clock">
          <path d={svgPaths.pc012c00} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <Clock />
      <div className="absolute bg-[rgba(0,0,0,0.15)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function TimestampFormat() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="Timestamp Format">
      <Icon1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap">2:09:56</p>
    </div>
  );
}

function CategoryAndTime() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Category and Time">
      <CategoryLabel />
      <TimestampFormat />
    </div>
  );
}

function Bookmark1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="bookmark">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-4.67%_-6%]" style={{ "--stroke-0": "rgba(2, 6, 23, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 16.4">
            <path d={svgPaths.p1eaa2100} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex isolate items-center justify-center opacity-0 p-[2px] relative size-[24px]" data-name="Icon">
      <Bookmark1 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <CategoryAndTime />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[60px] min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[60px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0f172a] text-[14px] w-full">When will BTC hit 150,000?</p>
    </div>
  );
}

function Image() {
  return (
    <div className="max-w-[77.53845977783203px] relative self-stretch shrink-0 w-[64px]" data-name="image">
      <div className="absolute h-[56px] left-[20px] rounded-[4px] top-0 w-[44px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <TextContainer />
      <Image />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container />
      <Frame23 />
    </div>
  );
}

function Lightning() {
  return (
    <div className="absolute contents inset-[10.41%_4.98%_8.04%_5.11%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.11%] right-[67.16%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2792)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2792" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164946">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.74%_16.33%_31.63%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15919">
            <g filter="url(#filter0_f_492_2788)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p2d5b47b0} fill="url(#paint0_linear_492_2788)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15919" id="filter0_f_492_2788" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2788" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2788" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_53.39%_10.35%_9.87%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.768deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2752)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p208340} fill="url(#paint0_linear_492_2752)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2752" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2752" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2752" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.74%_26.16%_34.64%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2796)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2796)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2796" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2796" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2796" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.98%_36.15%_70.84%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_14.51%_40%_60.94%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p2b3a4c00} fill="url(#paint0_linear_492_2738)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2738" x1="4.31613" x2="0.987832" y1="9.12718" y2="-0.0808057">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2790)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2790" r="1">
              <stop offset="0.1358" stopColor="#5BB98B" />
              <stop offset="0.7046" stopColor="#218358" />
              <stop offset="0.7217" stopColor="#218358" />
              <stop offset="0.7429" stopColor="#218358" />
              <stop offset="0.7623" stopColor="#218358" />
              <stop offset="0.7778" stopColor="#8ECEAA" />
              <stop offset="0.8078" stopColor="#2B9A66" />
              <stop offset="0.8378" stopColor="#2B9A66" />
              <stop offset="0.9109" stopColor="#30A46C" />
              <stop offset="0.9233" stopColor="#30A46C" />
              <stop offset="0.9623" stopColor="#5BB98B" />
              <stop offset="0.9725" stopColor="#8ECEAA" />
              <stop offset="0.9867" stopColor="#ADDDC0" />
              <stop offset="1" stopColor="#ADDDC0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning />
    </div>
  );
}

function YesGreen() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="Yes green">
      <Group />
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" data-name="Y">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 9.16667">
            <path d={svgPaths.p294227c0} fill="var(--fill-0, white)" id="Y" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <YesGreen />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">Yes</p>
    </div>
  );
}

function Yes() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Yes">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame8 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">59%</p>
        </div>
      </div>
    </div>
  );
}

function Lightning1() {
  return (
    <div className="absolute contents inset-[10.41%_4.43%_8.04%_5.66%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.66%] right-[66.61%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2786)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2786" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164947">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.19%_16.33%_32.18%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15918">
            <g filter="url(#filter0_f_492_2742)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p403db80} fill="url(#paint0_linear_492_2742)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15918" id="filter0_f_492_2742" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2742" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2742" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_52.84%_10.35%_10.42%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.769deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2734)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p219ee900} fill="url(#paint0_linear_492_2734)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2734" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2734" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2734" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.19%_26.16%_35.19%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2772)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2772)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2772" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2772" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2772" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.43%_36.15%_71.39%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_13.96%_40%_61.49%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p5773900} fill="url(#paint0_linear_492_2762)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2762" x1="4.31613" x2="0.987834" y1="9.12718" y2="-0.0808065">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2782)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2782" r="1">
              <stop offset="0.1358" stopColor="#EB8E90" />
              <stop offset="0.7046" stopColor="#CE2C31" />
              <stop offset="0.7217" stopColor="#CE2C31" />
              <stop offset="0.7429" stopColor="#CE2C31" />
              <stop offset="0.7623" stopColor="#CE2C31" />
              <stop offset="0.7778" stopColor="#F4A9AA" />
              <stop offset="0.8078" stopColor="#DC3E42" />
              <stop offset="0.8378" stopColor="#DC3E42" />
              <stop offset="0.9109" stopColor="#E5484D" />
              <stop offset="0.9233" stopColor="#E5484D" />
              <stop offset="0.9623" stopColor="#EB8E90" />
              <stop offset="0.9725" stopColor="#F4A9AA" />
              <stop offset="0.9867" stopColor="#FDBDBE" />
              <stop offset="1" stopColor="#FDBDBE" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning1 />
    </div>
  );
}

function NoRed() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="No Red">
      <Group1 />
      <div className="absolute inset-[29.17%_31.25%]" data-name="N">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.33333">
            <path d={svgPaths.p2b92e400} fill="var(--fill-0, white)" id="N" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <NoRed />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">No</p>
    </div>
  );
}

function No() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame9 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">41%</p>
        </div>
      </div>
    </div>
  );
}

function MarketButton() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Market Button">
      <Yes />
      <No />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">9</p>
      <p className="relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount />
      <p className="relative shrink-0">participants</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute left-0 size-[16px] top-[22px]" data-name="avatar">
      <img alt="" className="block max-w-none size-full" height="16" src={imgAvatar} width="16" />
    </div>
  );
}

function Frame() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#8145b5] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">CN</p>
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute content-stretch flex items-center left-[17px] size-[16px] top-[42px]" data-name="avatar">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#16433c] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">LA</p>
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute content-stretch flex items-center left-[34px] size-[16px] top-[62px]" data-name="avatar">
      <Frame1 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute bg-[#5a687d] content-stretch flex h-[16px] items-center left-[51px] px-[6px] py-0 rounded-[100px] top-[82px]" data-name="avatar">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[10px] text-nowrap">+100 comments</p>
    </div>
  );
}

function Users() {
  return (
    <div className="absolute contents left-0 top-[22px]" data-name="users">
      <Avatar />
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">308</p>
      <p className="relative shrink-0">.89K</p>
    </div>
  );
}

function AmountFormat1() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount1 />
      <p className="relative shrink-0">Vol.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat1 />
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Stats">
      <AmountFormat />
      <Users />
      <Frame24 />
    </div>
  );
}

function GeneralMarket() {
  return (
    <div className="basis-0 bg-[#fffefc] grow h-[208px] min-h-px min-w-px relative rounded-[12px] shrink-0 z-[4]" data-name="general market">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center pb-[10px] pt-[14px] px-[14px] relative size-full">
          <Frame19 />
          <MarketButton />
          <Stats />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap">Technology</p>
    </div>
  );
}

function Clock1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 z-[2]" data-name="clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="clock">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <Clock1 />
      <div className="absolute bg-[rgba(0,0,0,0.15)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function TimestampFormat1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="Timestamp Format">
      <Icon5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap">5 hours left</p>
    </div>
  );
}

function CategoryAndTime1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Category and Time">
      <CategoryLabel1 />
      <TimestampFormat1 />
    </div>
  );
}

function Bookmark2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="bookmark">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-4.67%_-6%]" style={{ "--stroke-0": "rgba(2, 6, 23, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 16.4">
            <path d={svgPaths.p1eaa2100} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex isolate items-center justify-center opacity-0 p-[2px] relative size-[24px]" data-name="Icon">
      <Bookmark2 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <CategoryAndTime1 />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[60px] min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[60px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0f172a] text-[14px] w-full">Will SpaceX Launch a Manned Mission to Mars by 2030?</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="max-w-[77.53845977783203px] relative self-stretch shrink-0 w-[64px]" data-name="image">
      <div className="absolute h-[56px] left-[20px] rounded-[4px] top-0 w-[44px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <TextContainer1 />
      <Image1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container1 />
      <Frame25 />
    </div>
  );
}

function Lightning2() {
  return (
    <div className="absolute contents inset-[10.41%_4.98%_8.04%_5.11%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.11%] right-[67.16%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2792)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2792" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164946">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.74%_16.33%_31.63%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15919">
            <g filter="url(#filter0_f_492_2788)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p2d5b47b0} fill="url(#paint0_linear_492_2788)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15919" id="filter0_f_492_2788" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2788" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2788" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_53.39%_10.35%_9.87%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.768deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2752)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p208340} fill="url(#paint0_linear_492_2752)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2752" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2752" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2752" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.74%_26.16%_34.64%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2796)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2796)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2796" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2796" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2796" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.98%_36.15%_70.84%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_14.51%_40%_60.94%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p2b3a4c00} fill="url(#paint0_linear_492_2738)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2738" x1="4.31613" x2="0.987832" y1="9.12718" y2="-0.0808057">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2790)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2790" r="1">
              <stop offset="0.1358" stopColor="#5BB98B" />
              <stop offset="0.7046" stopColor="#218358" />
              <stop offset="0.7217" stopColor="#218358" />
              <stop offset="0.7429" stopColor="#218358" />
              <stop offset="0.7623" stopColor="#218358" />
              <stop offset="0.7778" stopColor="#8ECEAA" />
              <stop offset="0.8078" stopColor="#2B9A66" />
              <stop offset="0.8378" stopColor="#2B9A66" />
              <stop offset="0.9109" stopColor="#30A46C" />
              <stop offset="0.9233" stopColor="#30A46C" />
              <stop offset="0.9623" stopColor="#5BB98B" />
              <stop offset="0.9725" stopColor="#8ECEAA" />
              <stop offset="0.9867" stopColor="#ADDDC0" />
              <stop offset="1" stopColor="#ADDDC0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning2 />
    </div>
  );
}

function YesGreen1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="Yes green">
      <Group2 />
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" data-name="Y">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 9.16667">
            <path d={svgPaths.p294227c0} fill="var(--fill-0, white)" id="Y" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <YesGreen1 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon7 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">Yes</p>
    </div>
  );
}

function Yes1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Yes">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame11 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">59%</p>
        </div>
      </div>
    </div>
  );
}

function Lightning3() {
  return (
    <div className="absolute contents inset-[10.41%_4.43%_8.04%_5.66%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.66%] right-[66.61%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2786)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2786" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164947">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.19%_16.33%_32.18%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15918">
            <g filter="url(#filter0_f_492_2742)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p403db80} fill="url(#paint0_linear_492_2742)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15918" id="filter0_f_492_2742" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2742" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2742" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_52.84%_10.35%_10.42%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.769deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2734)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p219ee900} fill="url(#paint0_linear_492_2734)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2734" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2734" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2734" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.19%_26.16%_35.19%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2772)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2772)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2772" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2772" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2772" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.43%_36.15%_71.39%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_13.96%_40%_61.49%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p5773900} fill="url(#paint0_linear_492_2762)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2762" x1="4.31613" x2="0.987834" y1="9.12718" y2="-0.0808065">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2782)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2782" r="1">
              <stop offset="0.1358" stopColor="#EB8E90" />
              <stop offset="0.7046" stopColor="#CE2C31" />
              <stop offset="0.7217" stopColor="#CE2C31" />
              <stop offset="0.7429" stopColor="#CE2C31" />
              <stop offset="0.7623" stopColor="#CE2C31" />
              <stop offset="0.7778" stopColor="#F4A9AA" />
              <stop offset="0.8078" stopColor="#DC3E42" />
              <stop offset="0.8378" stopColor="#DC3E42" />
              <stop offset="0.9109" stopColor="#E5484D" />
              <stop offset="0.9233" stopColor="#E5484D" />
              <stop offset="0.9623" stopColor="#EB8E90" />
              <stop offset="0.9725" stopColor="#F4A9AA" />
              <stop offset="0.9867" stopColor="#FDBDBE" />
              <stop offset="1" stopColor="#FDBDBE" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning3 />
    </div>
  );
}

function NoRed1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="No Red">
      <Group3 />
      <div className="absolute inset-[29.17%_31.25%]" data-name="N">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.33333">
            <path d={svgPaths.p2b92e400} fill="var(--fill-0, white)" id="N" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <NoRed1 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon8 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">No</p>
    </div>
  );
}

function No1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame12 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">41%</p>
        </div>
      </div>
    </div>
  );
}

function MarketButton1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Market Button">
      <Yes1 />
      <No1 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">9</p>
      <p className="relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat2() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount2 />
      <p className="relative shrink-0">participants</p>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="absolute left-0 size-[16px] top-[22px]" data-name="avatar">
      <img alt="" className="block max-w-none size-full" height="16" src={imgAvatar} width="16" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#8145b5] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">CN</p>
        </div>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="absolute content-stretch flex items-center left-[17px] size-[16px] top-[42px]" data-name="avatar">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#16433c] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">LA</p>
        </div>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="absolute content-stretch flex items-center left-[34px] size-[16px] top-[62px]" data-name="avatar">
      <Frame3 />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="absolute bg-[#5a687d] content-stretch flex h-[16px] items-center left-[51px] px-[6px] py-0 rounded-[100px] top-[82px]" data-name="avatar">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[10px] text-nowrap">+100 comments</p>
    </div>
  );
}

function Users1() {
  return (
    <div className="absolute contents left-0 top-[22px]" data-name="users">
      <Avatar4 />
      <Avatar5 />
      <Avatar6 />
      <Avatar7 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">308</p>
      <p className="relative shrink-0">.89K</p>
    </div>
  );
}

function AmountFormat3() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount3 />
      <p className="relative shrink-0">Vol.</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat3 />
    </div>
  );
}

function Stats1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Stats">
      <AmountFormat2 />
      <Users1 />
      <Frame26 />
    </div>
  );
}

function GeneralMarket1() {
  return (
    <div className="basis-0 bg-[#fffefc] grow h-[208px] min-h-px min-w-px relative rounded-[12px] shrink-0 z-[3]" data-name="general market">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center pb-[10px] pt-[14px] px-[14px] relative size-full">
          <Frame20 />
          <MarketButton1 />
          <Stats1 />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap">Politics</p>
    </div>
  );
}

function Clock2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 z-[2]" data-name="clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="clock">
          <path d={svgPaths.pc012c00} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <Clock2 />
      <div className="absolute bg-[rgba(0,0,0,0.15)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function TimestampFormat2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="Timestamp Format">
      <Icon9 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap">3:29:56</p>
    </div>
  );
}

function CategoryAndTime2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Category and Time">
      <CategoryLabel2 />
      <TimestampFormat2 />
    </div>
  );
}

function Bookmark3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="bookmark">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-4.67%_-6%]" style={{ "--stroke-0": "rgba(2, 6, 23, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 16.4">
            <path d={svgPaths.p1eaa2100} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex isolate items-center justify-center opacity-0 p-[2px] relative size-[24px]" data-name="Icon">
      <Bookmark3 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <CategoryAndTime2 />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[60px] min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[60px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0f172a] text-[14px] w-full">Will TikTok be officially banned in the United States by September 1, 2025?</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="max-w-[77.53845977783203px] relative self-stretch shrink-0 w-[64px]" data-name="image">
      <div className="absolute h-[56px] left-[20px] rounded-[6px] top-0 w-[44px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <TextContainer2 />
      <Image2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container2 />
      <Frame27 />
    </div>
  );
}

function Lightning4() {
  return (
    <div className="absolute contents inset-[10.41%_4.98%_8.04%_5.11%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.11%] right-[67.16%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2792)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2792" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164946">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.74%_16.33%_31.63%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15919">
            <g filter="url(#filter0_f_492_2788)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p2d5b47b0} fill="url(#paint0_linear_492_2788)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15919" id="filter0_f_492_2788" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2788" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2788" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_53.39%_10.35%_9.87%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.768deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2752)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p208340} fill="url(#paint0_linear_492_2752)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2752" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2752" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2752" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.74%_26.16%_34.64%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2796)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2796)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2796" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2796" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2796" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.98%_36.15%_70.84%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_14.51%_40%_60.94%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p2b3a4c00} fill="url(#paint0_linear_492_2738)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2738" x1="4.31613" x2="0.987832" y1="9.12718" y2="-0.0808057">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2790)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2790" r="1">
              <stop offset="0.1358" stopColor="#5BB98B" />
              <stop offset="0.7046" stopColor="#218358" />
              <stop offset="0.7217" stopColor="#218358" />
              <stop offset="0.7429" stopColor="#218358" />
              <stop offset="0.7623" stopColor="#218358" />
              <stop offset="0.7778" stopColor="#8ECEAA" />
              <stop offset="0.8078" stopColor="#2B9A66" />
              <stop offset="0.8378" stopColor="#2B9A66" />
              <stop offset="0.9109" stopColor="#30A46C" />
              <stop offset="0.9233" stopColor="#30A46C" />
              <stop offset="0.9623" stopColor="#5BB98B" />
              <stop offset="0.9725" stopColor="#8ECEAA" />
              <stop offset="0.9867" stopColor="#ADDDC0" />
              <stop offset="1" stopColor="#ADDDC0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning4 />
    </div>
  );
}

function YesGreen2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="Yes green">
      <Group4 />
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" data-name="Y">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 9.16667">
            <path d={svgPaths.p294227c0} fill="var(--fill-0, white)" id="Y" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <YesGreen2 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon11 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">Yes</p>
    </div>
  );
}

function Yes2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Yes">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame13 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">59%</p>
        </div>
      </div>
    </div>
  );
}

function Lightning5() {
  return (
    <div className="absolute contents inset-[10.41%_4.43%_8.04%_5.66%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.66%] right-[66.61%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2786)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2786" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164947">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.19%_16.33%_32.18%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15918">
            <g filter="url(#filter0_f_492_2742)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p403db80} fill="url(#paint0_linear_492_2742)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15918" id="filter0_f_492_2742" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2742" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2742" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_52.84%_10.35%_10.42%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.769deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2734)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p219ee900} fill="url(#paint0_linear_492_2734)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2734" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2734" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2734" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.19%_26.16%_35.19%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2772)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2772)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2772" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2772" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2772" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.43%_36.15%_71.39%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_13.96%_40%_61.49%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p5773900} fill="url(#paint0_linear_492_2762)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2762" x1="4.31613" x2="0.987834" y1="9.12718" y2="-0.0808065">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2782)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2782" r="1">
              <stop offset="0.1358" stopColor="#EB8E90" />
              <stop offset="0.7046" stopColor="#CE2C31" />
              <stop offset="0.7217" stopColor="#CE2C31" />
              <stop offset="0.7429" stopColor="#CE2C31" />
              <stop offset="0.7623" stopColor="#CE2C31" />
              <stop offset="0.7778" stopColor="#F4A9AA" />
              <stop offset="0.8078" stopColor="#DC3E42" />
              <stop offset="0.8378" stopColor="#DC3E42" />
              <stop offset="0.9109" stopColor="#E5484D" />
              <stop offset="0.9233" stopColor="#E5484D" />
              <stop offset="0.9623" stopColor="#EB8E90" />
              <stop offset="0.9725" stopColor="#F4A9AA" />
              <stop offset="0.9867" stopColor="#FDBDBE" />
              <stop offset="1" stopColor="#FDBDBE" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning5 />
    </div>
  );
}

function NoRed2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="No Red">
      <Group5 />
      <div className="absolute inset-[29.17%_31.25%]" data-name="N">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.33333">
            <path d={svgPaths.p2b92e400} fill="var(--fill-0, white)" id="N" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <NoRed2 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon12 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">No</p>
    </div>
  );
}

function No2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame14 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">41%</p>
        </div>
      </div>
    </div>
  );
}

function MarketButton2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Market Button">
      <Yes2 />
      <No2 />
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">9</p>
      <p className="relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat4() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount4 />
      <p className="relative shrink-0">participants</p>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="absolute left-0 size-[16px] top-[22px]" data-name="avatar">
      <img alt="" className="block max-w-none size-full" height="16" src={imgAvatar} width="16" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#8145b5] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">CN</p>
        </div>
      </div>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="absolute content-stretch flex items-center left-[17px] size-[16px] top-[42px]" data-name="avatar">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#16433c] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">LA</p>
        </div>
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="absolute content-stretch flex items-center left-[34px] size-[16px] top-[62px]" data-name="avatar">
      <Frame5 />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="absolute bg-[#5a687d] content-stretch flex h-[16px] items-center left-[51px] px-[6px] py-0 rounded-[100px] top-[82px]" data-name="avatar">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[10px] text-nowrap">+100 comments</p>
    </div>
  );
}

function Users2() {
  return (
    <div className="absolute contents left-0 top-[22px]" data-name="users">
      <Avatar8 />
      <Avatar9 />
      <Avatar10 />
      <Avatar11 />
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">308</p>
      <p className="relative shrink-0">.89K</p>
    </div>
  );
}

function AmountFormat5() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount5 />
      <p className="relative shrink-0">Vol.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat5 />
    </div>
  );
}

function Stats2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Stats">
      <AmountFormat4 />
      <Users2 />
      <Frame29 />
    </div>
  );
}

function GeneralMarket2() {
  return (
    <div className="basis-0 bg-[#fffefc] grow h-[208px] min-h-px min-w-px relative rounded-[12px] shrink-0 z-[2]" data-name="general market">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center pb-[10px] pt-[14px] px-[14px] relative size-full">
          <Frame28 />
          <MarketButton2 />
          <Stats2 />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel3() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-nowrap">Sports</p>
    </div>
  );
}

function Clock3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 z-[2]" data-name="clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="clock">
          <path d={svgPaths.pc012c00} fill="var(--fill-0, #A3A3A3)" id="Vector" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #C7C7C7)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <Clock3 />
      <div className="absolute bg-[rgba(0,0,0,0.15)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function TimestampFormat3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="Timestamp Format">
      <Icon13 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap">3:29:56</p>
    </div>
  );
}

function CategoryAndTime3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Category and Time">
      <CategoryLabel3 />
      <TimestampFormat3 />
    </div>
  );
}

function Bookmark4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px overflow-clip relative shrink-0 z-[2]" data-name="bookmark">
      <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-4.67%_-6%]" style={{ "--stroke-0": "rgba(2, 6, 23, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 16.4">
            <path d={svgPaths.p1eaa2100} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex isolate items-center justify-center opacity-0 p-[2px] relative size-[24px]" data-name="Icon">
      <Bookmark4 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <CategoryAndTime3 />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-h-[80px] min-h-[60px] min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[60px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0f172a] text-[14px] w-full">Norris vs Piastri: Who will score more points at the 2025 Aramco GP?</p>
    </div>
  );
}

function Image3() {
  return (
    <div className="max-w-[77.53845977783203px] relative self-stretch shrink-0 w-[64px]" data-name="image">
      <div className="absolute h-[56px] left-[20px] rounded-[4px] top-0 w-[44px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <TextContainer3 />
      <Image3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container3 />
      <Frame30 />
    </div>
  );
}

function Lightning6() {
  return (
    <div className="absolute contents inset-[10.41%_4.98%_8.04%_5.11%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.11%] right-[67.16%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2792)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2792" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164946">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.74%_16.33%_31.63%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15919">
            <g filter="url(#filter0_f_492_2788)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p2d5b47b0} fill="url(#paint0_linear_492_2788)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15919" id="filter0_f_492_2788" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2788" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2788" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_53.39%_10.35%_9.87%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.768deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2752)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p208340} fill="url(#paint0_linear_492_2752)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2752" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2752" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2752" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.74%_26.16%_34.64%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2796)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2796)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2796" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2796" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2796" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.98%_36.15%_70.84%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_14.51%_40%_60.94%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p2b3a4c00} fill="url(#paint0_linear_492_2738)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2738" x1="4.31613" x2="0.987832" y1="9.12718" y2="-0.0808057">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2790)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2790" r="1">
              <stop offset="0.1358" stopColor="#5BB98B" />
              <stop offset="0.7046" stopColor="#218358" />
              <stop offset="0.7217" stopColor="#218358" />
              <stop offset="0.7429" stopColor="#218358" />
              <stop offset="0.7623" stopColor="#218358" />
              <stop offset="0.7778" stopColor="#8ECEAA" />
              <stop offset="0.8078" stopColor="#2B9A66" />
              <stop offset="0.8378" stopColor="#2B9A66" />
              <stop offset="0.9109" stopColor="#30A46C" />
              <stop offset="0.9233" stopColor="#30A46C" />
              <stop offset="0.9623" stopColor="#5BB98B" />
              <stop offset="0.9725" stopColor="#8ECEAA" />
              <stop offset="0.9867" stopColor="#ADDDC0" />
              <stop offset="1" stopColor="#ADDDC0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning6 />
    </div>
  );
}

function YesGreen3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="Yes green">
      <Group6 />
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" data-name="Y">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 9.16667">
            <path d={svgPaths.p294227c0} fill="var(--fill-0, white)" id="Y" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <YesGreen3 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon15 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">Yes</p>
    </div>
  );
}

function Yes3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Yes">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame15 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">59%</p>
        </div>
      </div>
    </div>
  );
}

function Lightning7() {
  return (
    <div className="absolute contents inset-[10.41%_4.43%_8.04%_5.66%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.66%] right-[66.61%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_492_2786)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2786" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164947">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.19%_16.33%_32.18%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15918">
            <g filter="url(#filter0_f_492_2742)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p403db80} fill="url(#paint0_linear_492_2742)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15918" id="filter0_f_492_2742" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2742" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2742" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_52.84%_10.35%_10.42%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.283deg] skew-x-[357.769deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_492_2734)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p219ee900} fill="url(#paint0_linear_492_2734)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_492_2734" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_492_2734" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2734" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.19%_26.16%_35.19%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_492_2772)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_492_2772)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_492_2772" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_492_2772" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2772" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.43%_36.15%_71.39%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_492_2794)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2794" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_13.96%_40%_61.49%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p5773900} fill="url(#paint0_linear_492_2762)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_492_2762" x1="4.31613" x2="0.987834" y1="9.12718" y2="-0.0808065">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_492_2782)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16648 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_492_2782" r="1">
              <stop offset="0.1358" stopColor="#EB8E90" />
              <stop offset="0.7046" stopColor="#CE2C31" />
              <stop offset="0.7217" stopColor="#CE2C31" />
              <stop offset="0.7429" stopColor="#CE2C31" />
              <stop offset="0.7623" stopColor="#CE2C31" />
              <stop offset="0.7778" stopColor="#F4A9AA" />
              <stop offset="0.8078" stopColor="#DC3E42" />
              <stop offset="0.8378" stopColor="#DC3E42" />
              <stop offset="0.9109" stopColor="#E5484D" />
              <stop offset="0.9233" stopColor="#E5484D" />
              <stop offset="0.9623" stopColor="#EB8E90" />
              <stop offset="0.9725" stopColor="#F4A9AA" />
              <stop offset="0.9867" stopColor="#FDBDBE" />
              <stop offset="1" stopColor="#FDBDBE" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning7 />
    </div>
  );
}

function NoRed3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0 z-[2]" data-name="No Red">
      <Group7 />
      <div className="absolute inset-[29.17%_31.25%]" data-name="N">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.33333">
            <path d={svgPaths.p2b92e400} fill="var(--fill-0, white)" id="N" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <NoRed3 />
      <div className="absolute bg-[rgba(0,0,0,0.05)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Icon16 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-nowrap">No</p>
    </div>
  );
}

function No3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="No">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[6px] pr-[8px] py-[6px] relative w-full">
          <Frame16 />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#7d8c91] text-[12px] text-nowrap">41%</p>
        </div>
      </div>
    </div>
  );
}

function MarketButton3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Market Button">
      <Yes3 />
      <No3 />
    </div>
  );
}

function Amount6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">9</p>
      <p className="relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat6() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount6 />
      <p className="relative shrink-0">participants</p>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="absolute left-0 size-[16px] top-[22px]" data-name="avatar">
      <img alt="" className="block max-w-none size-full" height="16" src={imgAvatar} width="16" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#8145b5] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">CN</p>
        </div>
      </div>
    </div>
  );
}

function Avatar13() {
  return (
    <div className="absolute content-stretch flex items-center left-[17px] size-[16px] top-[42px]" data-name="avatar">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="aspect-[28/28] basis-0 bg-[#16433c] grow min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[8px] text-nowrap">LA</p>
        </div>
      </div>
    </div>
  );
}

function Avatar14() {
  return (
    <div className="absolute content-stretch flex items-center left-[34px] size-[16px] top-[62px]" data-name="avatar">
      <Frame7 />
    </div>
  );
}

function Avatar15() {
  return (
    <div className="absolute bg-[#5a687d] content-stretch flex h-[16px] items-center left-[51px] px-[6px] py-0 rounded-[100px] top-[82px]" data-name="avatar">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#f8fafc] text-[10px] text-nowrap">+100 comments</p>
    </div>
  );
}

function Users3() {
  return (
    <div className="absolute contents left-0 top-[22px]" data-name="users">
      <Avatar12 />
      <Avatar13 />
      <Avatar14 />
      <Avatar15 />
    </div>
  );
}

function Amount7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="relative shrink-0">308</p>
      <p className="relative shrink-0">.89K</p>
    </div>
  );
}

function AmountFormat7() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-nowrap" data-name="Amount Format">
      <Amount7 />
      <p className="relative shrink-0">Vol.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat7 />
    </div>
  );
}

function Stats3() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Stats">
      <AmountFormat6 />
      <Users3 />
      <Frame32 />
    </div>
  );
}

function GeneralMarket3() {
  return (
    <div className="basis-0 bg-[#fffefc] grow h-[208px] min-h-px min-w-px relative rounded-[12px] shrink-0 z-[1]" data-name="general market">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center pb-[10px] pt-[14px] px-[14px] relative size-full">
          <Frame31 />
          <MarketButton3 />
          <Stats3 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[204px] isolate items-center relative shrink-0 w-full z-[1]">
      <GeneralMarket />
      <GeneralMarket1 />
      <GeneralMarket2 />
      <GeneralMarket3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[1]">
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col isolate items-start px-0 py-[24px] relative rounded-[8px] shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function MarketBuzzTitle1() {
  return (
    <div className="content-stretch flex h-[80px] items-end justify-center pb-0 pt-[56px] px-0 relative shrink-0 w-full" data-name="Market Buzz Title">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px not-italic opacity-0 relative shrink-0 text-[#020617] text-[20px]">All Categories</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[1296px] pb-0 pt-[4px] px-0 relative shrink-0 w-full" data-name="content">
      <Frame10 />
      <MarketBuzzTitle1 />
    </div>
  );
}

export default function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative size-full">
      <MarketBuzzTitle />
      <Content />
    </div>
  );
}