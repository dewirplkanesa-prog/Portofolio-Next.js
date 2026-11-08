"use client";
import { useState, useEffect } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    useEffect(() => {
        const tema = localStorage.getItem("tema");

        if (tema === "gelap") { document.documentElement.classList.add("dark");
            setGelap(true);
        }

    }, []);

    function gantiTema() {
        const html = document.documentElement;

        if(html.classList.contains("dark")) {
            html.classList.remove("dark");
            setGelap(false);
            localStorage.setItem("tema", "terang")
        }

        else {
            html.classList.add("dark");
            setGelap(true);
            localStorage.setItem("tema", "gelap");
        }
    }

    return (
        <button 
        type="button"
        onClick={gantiTema}
        className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen">
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}