import { NextRequest, NextResponse } from "next/server";
import { contact } from "../data";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ social: string }> },
) {
    const { social } = await params;

    const contactObj = contact.find(
        (c) => c.name.toLowerCase() === social.toLowerCase(),
    );

    if (!contactObj) {
        return NextResponse.json(
            {
                message: "The social does not exist",
            },
            { status: 404 },
        );
    }

    return NextResponse.redirect(contactObj.url);
}
