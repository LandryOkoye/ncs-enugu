"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, AlertCircle } from "lucide-react"
import { RegistrationForm } from "@/components/registration-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#070707] lg:grid lg:grid-cols-[1fr_480px]">
      {/* ── Left: Form ── */}
      <div className="flex flex-col px-6 md:px-12 xl:px-20 py-8 pt-28">
        <Link href="/" className="mb-10 inline-flex">
          <img
            src="/logo.png"
            alt="NCS Enugu Awards"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile event summary */}
        <div className="lg:hidden mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
            Event Details
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50 font-light">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c59d5f]" />
              Friday, 25 September 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
              Presidential Hotel, Enugu
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c59d5f]" />
              4:00 PM
            </span>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <RegistrationForm />
        </div>

        <p className="mt-10 text-xs text-white/20 font-light">
          &copy; {new Date().getFullYear()} NCS Enugu. All rights reserved.
        </p>
      </div>

      {/* ── Right: Sticky Info Panel ── */}
      <div className="hidden lg:flex flex-col sticky top-0 h-screen bg-[#050505] border-l border-white/5 overflow-hidden">
        {/* Hotel image */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src="/presidential-hotel.png"
            alt="Presidential Hotel Enugu"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />

          {/* Top badge */}
          <div className="absolute top-8 left-8 right-8">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#c59d5f]/15 border border-[#c59d5f]/30 text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase">
              NCS Enugu EIIA 2026
            </span>
          </div>
        </div>

        {/* Info block */}
        <div className="p-8 flex flex-col gap-6">
          <div>
            <p className="text-[#c59d5f] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
              Event Details
            </p>
            <h2 className="text-2xl font-light text-[#efe5d2] leading-snug mb-5">
              Innovation &amp; Impact Awards
            </h2>

            <div className="flex flex-col gap-3">
              {[
                { icon: Calendar, label: "Friday, 25 September 2026" },
                { icon: MapPin, label: "Presidential Hotel, Enugu" },
                { icon: Clock, label: "4:00 PM" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c59d5f]/10 border border-[#c59d5f]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#c59d5f]" />
                  </div>
                  <span className="text-sm text-white/60 font-light">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="p-4 rounded-xl bg-[#c59d5f]/8 border border-[#c59d5f]/15">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#c59d5f] mt-0.5 shrink-0" />
              <div>
                <p className="text-[#c59d5f] text-xs font-semibold mb-1">Important Notice</p>
                <p className="text-white/45 text-xs font-light leading-relaxed">
                  Registration is free but does not guarantee attendance. As seating
                  is limited, successful registrants will receive an official Event
                  Pass/Invitation via email prior to the event.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/30 text-xs font-light leading-relaxed">
            Join Nigeria&apos;s premier platform celebrating technology innovation, digital excellence,
            and impactful leadership — bringing together innovators, founders, government officials,
            academia, investors, and industry professionals.
          </p>
        </div>
      </div>
    </div>
  )
}
