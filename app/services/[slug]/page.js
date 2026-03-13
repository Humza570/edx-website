import { services } from "@/app/data/services";
import { notFound } from "next/navigation";

import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | EdX Consultants`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetailClient slug={slug} />;
}
