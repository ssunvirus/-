import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mx-auto mt-auto h-[300px] w-full max-w-[1440px] bg-[#102D4A] text-white">
            <div className="grid h-[259px] grid-cols-[292px_253px_52px_1fr] gap-[96px] px-[96px] pt-[40px]">
                <section className="-mt-[15px]">
                    <Image
                        src="/logo-white.svg"
                        alt="산정엔지니어링"
                        width={204}
                        height={68}
                    />

                    <p className="mt-[30px] text-[15px] font-semibold leading-normal">
                        30년 경험으로
                        <br />
                        지속가능한 냉동공조 환경을 만듭니다.
                    </p>

                    <div className="mt-[19px] h-px w-6 bg-white" />

                    <p className="mt-[19px] text-[15px] font-semibold leading-normal">
                        냉동/공조설비와 섬유덕트를 중심으로
                        <br />
                        고객의 공간에 최적의 솔루션을 제공합니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-[20px] font-semibold">문의안내</h2>

                    <address className="mt-[25px] not-italic">
                        <ul className="space-y-[12px] text-[15px] font-semibold">
                            <li>
                                <a href="tel:01053401728">
                                    010 - 5340 - 1728
                                </a>
                            </li>

                            <li>
                                <a href="mailto:sanjungeng@naver.com">
                                    sanjungeng@naver.com
                                </a>
                            </li>

                            <li className="leading-normal">
                                서울특별시 금천구 시흥대로 97,
                                <br />
                                6동 213호
                                <br />
                                (시흥동, 시흥산업용재유통센타)
                            </li>
                        </ul>
                    </address>
                </section>

                <section>
                    <h2 className="whitespace-nowrap text-[20px] font-semibold">
                        공식 블로그
                    </h2>

                    <Link
                        href="https://blog.naver.com/sanjungeng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-[32px] block"
                        aria-label="산정엔지니어링 공식 블로그 열기"
                    >
                        <Image
                            src="/naver-blog.svg"
                            alt=""
                            width={95}
                            height={74}
                        />
                    </Link>
                </section>

                <section>
                    <h2 className="text-[20px] font-semibold">파트너사</h2>

                    <div className="mt-[20px] flex items-center gap-[6px]">
                        <Image
                            src="/partner-multixair.svg"
                            alt="Multixair"
                            width={158}
                            height={84}
                        />

                        <Image
                            src="/partner-carrier.svg"
                            alt="Carrier"
                            width={203}
                            height={101}
                        />
                    </div>
                </section>
            </div>

            <div className="flex h-[41px] items-center gap-[24px] border-t border-white/50 px-[72px] text-[15px] font-medium">
                <span>사업자 등록번호 : 119-81-58805</span>
                <span>대표자 : 김윤환</span>
                <span>© 2026 (주) 산정엔지니어링. All Rights Reserved</span>
            </div>
        </footer>
    );
}
