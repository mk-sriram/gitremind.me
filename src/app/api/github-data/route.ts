import { NextResponse } from "next/server";
import { fetchGitHubData } from "@/utils/github/fetchGitHubData";

export async function GET() {
  try {
    const data = await fetchGitHubData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
