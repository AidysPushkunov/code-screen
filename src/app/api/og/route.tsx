// App router includes @vercel/og. next/server

import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {

    try {
        const { searchParams } = new URL(request.url);
        const hasCode: boolean = searchParams.has('code');
        const code: any = hasCode ? searchParams.get('code') : 'Hello';


        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        backgroundColor: '#333A45',
                        backgroundSize: '400px 700px',
                        height: '100%',
                        width: '100%',
                        borderRadius: '30px',
                    }}
                >
                    <div
                        className='codeDivElement'
                        style={{
                            fontSize: 40,
                            fontStyle: 'normal',
                            letterSpacing: '-0.025em',
                            color: 'white',
                            marginTop: 30,
                            padding: '0 120px',
                            lineHeight: 1.4,
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        {code}
                    </div>
                    <div>

                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}