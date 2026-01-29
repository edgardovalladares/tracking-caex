import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { orderNo } = await request.json();

    if (!orderNo) {
      return new Response(JSON.stringify({ error: 'Order number is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const aid = 'c586fa65-473e-454d-826b-448cea88b320';
    const apiUrl = 'https://products.loginextsolutions.com/ShipmentApp/shipment/fmlm/get/webLinkdata';

    console.log(`Tracking request for: ${orderNo}`);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'www-authenticate': `BASIC ${aid}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Origin': 'https://api.loginextsolutions.com',
        'Referer': 'https://api.loginextsolutions.com/trackall/'
      },
      body: JSON.stringify({ orderNo })
    });

    const data = await response.json();
    console.log('API Response Status:', response.status);

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Proxy Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
