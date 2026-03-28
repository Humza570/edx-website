import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country"); // e.g. "Malaysia"

  if (!country) {
    return NextResponse.json(
      { error: "country param required" },
      { status: 400 },
    );
  }

  const dirPath = path.join(process.cwd(), "public", "Universities", country);
  console.log("DIR:", dirPath);
  try {
    const files = await fs.readdir(dirPath);

    const logos = files
      .filter((f) => /\.(png|jpg|jpeg|webp|svg)$/i.test(f))
      .map((filename) => {
        // "www.apu.edu.my.png" → url = "https://www.apu.edu.my"
        const nameWithoutExt = filename.replace(
          /\.(png|jpg|jpeg|webp|svg)$/i,
          "",
        );
        const url = `https://${nameWithoutExt}`;

        return {
          name: nameWithoutExt, // raw filename without extension
          logo: `/Universities/${country}/${filename}`,
          url: url,
        };
      });

    return NextResponse.json({ logos });
  } catch (err) {
    // Directory doesn't exist or other error
    return NextResponse.json({ logos: [] });
  }
}
