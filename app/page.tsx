"use client";

import { useState } from "react";

const destinations = [
  {
    name: "Sigiriya",
    location: "Central Province",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1588598198321-9735fd5f4c70?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ella",
    location: "Uva Province",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Trincomalee",
    location: "Eastern Province",
    category: "Beaches",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Galle",
    location: "Southern Province",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredDestinations = destinations.filter((place) => {
    const matchesSearch = `${place.name} ${place.location}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || place.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="text-2xl font-black tracking-tight">
            <span className="text-emerald-600">Trip</span> Mate
            <span className="ml-1">🌴</span>
          </a>

          <nav className="hidden items-center gap-7 font-semibold md:flex">
            <a href="#explore" className="hover:text-emerald-600">
              Explore
            </a>
            <a href="#experiences" className="hover:text-emerald-600">
              Things to do
            </a>
            <a href="#restaurants" className="hover:text-emerald-600">
              Restaurants
            </a>
            <a href="#stays" className="hover:text-emerald-600">
              Stays
            </a>
          </nav>

          <a
            href="#explore"
            className="rounded-full bg-emerald-600 px-5 py-2.5 font-bold text-white hover:bg-emerald-700"
          >
            Explore Sri Lanka
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-emerald-950 px-5 py-20 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <span className="mb-5 inline-block rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            YOUR JOURNEY STARTS HERE 🇱🇰
          </span>

          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-6xl">
            Discover Sri Lanka.
            <br />
            <span className="text-emerald-300">Find Your Adventure.</span>
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-lg text-white/90 sm:text-xl">
            Discover amazing places, unforgettable experiences, great food,
            and beautiful stays across Sri Lanka.
          </p>

          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <span className="text-2xl">📍</span>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  document
                    .getElementById("explore")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                placeholder="Where do you want to go?"
                className="w-full py-3 text-gray-900 outline-none"
              />
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("explore")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white hover:bg-emerald-700"
            >
              Search places
            </button>
          </div>

          <p className="mt-5 text-sm text-white/80">
            Beaches · Mountains · Culture · Wildlife
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="experiences" className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="mb-2 text-3xl font-extrabold">
          What would you like to explore?
        </h2>
        <p className="mb-7 text-gray-500">
          Find an experience that matches your travel style.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["🏝️", "Beautiful Beaches", "Beaches"],
            ["⛰️", "Nature & Mountains", "Nature"],
            ["🏛️", "Culture & Heritage", "Culture"],
            ["🍜", "Food & Restaurants", "Restaurants"],
          ].map(([icon, title, type]) => (
            <button
              key={title}
              onClick={() => {
                if (type === "Restaurants") {
                  document
                    .getElementById("restaurants")
                    ?.scrollIntoView({ behavior: "smooth" });
                } else {
                  setCategory(type);
                  document
                    .getElementById("explore")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-2xl border border-gray-200 p-6 text-left transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
            >
              <span className="mb-3 block text-4xl">{icon}</span>
              <span className="font-bold">{title}</span>
              <span className="mt-2 block text-sm text-emerald-700">
                Explore places →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section id="explore" className="bg-gray-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 font-bold uppercase tracking-widest text-emerald-700">
                EXPLORE THE ISLAND
              </p>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Popular destinations
              </h2>
              <p className="mt-2 text-gray-500">
                Start planning your next adventure.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Nature", "Beaches", "Culture"].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    category === item
                      ? "bg-emerald-600 text-white"
                      : "border bg-white hover:border-emerald-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDestinations.map((place) => (
              <article
                key={place.name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url("${place.image}")` }}
                  role="img"
                  aria-label={place.name}
                />

                <div className="p-5">
                  <span className="text-sm font-semibold text-emerald-700">
                    {place.category}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    📍 {place.location}
                  </p>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      place.name + " Sri Lanka attractions"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block font-bold text-emerald-700 hover:underline"
                  >
                    Discover more →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <p className="rounded-xl bg-white p-8 text-center text-gray-500">
              No matching destinations found. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* Restaurants */}
      <section id="restaurants" className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl bg-amber-50 p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-4xl">🍽️</span>
            <h2 className="mt-4 text-3xl font-extrabold">
              Discover local food
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Explore Sri Lankan restaurants, traditional dishes, cafés, and
              places to eat during your journey.
            </p>
            <a
              href="https://www.google.com/maps/search/restaurants+in+Sri+Lanka/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 font-bold text-white hover:bg-gray-700"
            >
              Explore restaurants →
            </a>
          </div>
        </div>
      </section>

      {/* Stays */}
      <section id="stays" className="px-5 pb-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-emerald-950 p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-emerald-300">
              FIND YOUR PERFECT STAY
            </p>
            <h2 className="text-3xl font-extrabold">
              Your next stay awaits.
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Discover villas, hotels, cottages, cabanas, and homestays for
              your next Sri Lankan adventure.
            </p>
          </div>

          <a
            href="https://stayandgo.lk"
            className="shrink-0 rounded-full bg-white px-7 py-4 text-center font-extrabold text-emerald-950 hover:bg-emerald-100"
          >
            Explore stays →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            <strong className="text-gray-900">Trip Mate 🌴</strong> — Discover
            Sri Lanka your way.
          </p>
          <p>Explore more. Experience more.</p>
        </div>
      </footer>
    </main>
  );
}