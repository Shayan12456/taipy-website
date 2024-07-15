import { ROUTES } from '@/constants/routes';

import Button from '@/components/shared/button';

export default function Hero() {
  return (
    <section className="hero pt-[113px] lg:pt-[102px] md:pt-[81px] sm:pt-[91px]">
      <div className="container-narrow max-w-5xl text-center lg:max-w-4xl">
        <p className="leading-snug text-primary-red sm:text-14">Taipy Enterprise Edition</p>
        <h1 className="mx-auto pt-5 text-48 font-semibold leading-dense tracking-tight lg:max-w-[832px] lg:text-40 md:max-w-[640px] md:pt-3.5 md:text-32 sm:text-28">
          Taipy enterprise for customers that require enterprise Support, SSO, ACL, Scalability and
          Robustness
        </h1>
        <p className="mx-auto max-w-[642px] pt-5 leading-snug opacity-80 lg:max-w-xl md:pt-4 sm:pt-3.5 sm:text-14">
          Built on Python with decades of industry expertise. You can count on us to deliver
          products that address your needs today and in the future.
        </p>
        <Button
          className="relative z-10 mt-[46px] w-full max-w-[180px] lg:mt-7 sm:mt-[22px]"
          size="lgConst"
          theme="red-filled"
          href={ROUTES.REQUEST_A_DEMO}
        >
          Book a call
          <span className="absolute top-[-51px] -z-10 h-[190px] w-full max-w-9 rotate-90 bg-hero-btn-enterprise blur-[36px]" />
        </Button>
      </div>
    </section>
  );
}
