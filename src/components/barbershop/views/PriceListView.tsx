"use client";

import { SERVICE_GROUPS, type ViewId } from "@/lib/barbershop-data";
import { Wrap, ViewLink } from "../ui";

export function PriceListView({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <section className="py-12 sm:py-18 bg-[var(--cream)] text-[var(--ink)]">
      <Wrap className="text-center">
        <span className="inline-block bg-[var(--brass)] text-[var(--navy-deep)] font-display font-extrabold uppercase tracking-[0.12em] px-3.5 py-1.5 text-[14px] sm:text-[15px] mb-4.5">
          Walk-ins only • Samo walk-in
        </span>
        <h1 className="font-display font-extrabold uppercase text-[clamp(28px,7vw,52px)] leading-[0.95] mb-2.5">
          Price List / Cijenik
        </h1>
        <p className="max-w-[62ch] mx-auto mb-8 sm:mb-10 text-[15px] sm:text-[17px]">
          All prices in euros. Cash only. Every service by our barber &amp; male
          stylist (muški frizer / brijač) includes the time it takes to do it right — no
          rushed cuts.
        </p>
      </Wrap>

      <Wrap>
        <div className="bg-[var(--navy-deep)] text-[var(--cream)] border-[3px] border-[var(--brass)] p-5 sm:p-8 lg:p-10 max-w-[860px] mx-auto">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="font-display uppercase text-center tracking-[0.16em] sm:tracking-[0.2em] text-[24px] sm:text-[30px] text-[var(--brass)] my-5 sm:my-6.5 first:mt-0">
                {group.title}
              </h2>
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline gap-2.5 py-2 sm:py-2.5"
                >
                  <span className="uppercase font-semibold tracking-[0.04em] text-[14px] sm:text-[16px]">
                    {item.name}
                    {item.desc && (
                      <small className="block normal-case tracking-normal font-normal text-[#bfb59d] text-[12.5px] sm:text-[13.5px]">
                        {item.desc}
                      </small>
                    )}
                  </span>
                  <span className="dots-leader" />
                  <span className="font-display font-extrabold text-[18px] sm:text-[22px] text-[var(--cream)] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 sm:mt-10 text-[15px] sm:text-[17px] px-2">
          Not sure which service fits? Read the guides on the{" "}
          <ViewLink view="blog" onNavigate={onNavigate}>
            blog
          </ViewLink>{" "}
          or just sit down and ask your barber — that&apos;s what the chair is for.
        </p>
      </Wrap>
    </section>
  );
}
