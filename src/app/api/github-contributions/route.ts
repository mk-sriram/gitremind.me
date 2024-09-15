import { NextResponse } from "next/server";
import { getProviderTokens } from "@/utils/supabase/getProviderTokens";
import axios from "axios";

export async function GET() {
  try {
    // Get the provider tokens using your existing function
    const { provider_token } = await getProviderTokens();

    if (!provider_token) {
      return NextResponse.json(
        { error: "No GitHub token found" },
        { status: 404 }
      );
    }

    // Use the provider token to fetch GitHub contributions
    const query = `
      query {
        viewer {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const response = await axios({
      url: "https://api.github.com/graphql",
      method: "post",
      headers: {
        Authorization: `Bearer ${provider_token}`,
      },
      data: { query },
    });

    const contributions =
      response.data.data.viewer.contributionsCollection.contributionCalendar
        .totalContributions;

    return NextResponse.json({ contributions });
  } catch (error) {
    console.error("Error in GitHub contributions API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 500 }
    );
  }
}
