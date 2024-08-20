export async function getAvatars(number) {
  const res = await fetch(
    `https://tinyfac.es/api/data?limit=${number}&quality=0`
  );
  const data = await res.json();
  return data;
}

export async function GET(request) {
  const number = request.nextUrl.searchParams.get("number");
  const result = await getAvatars(number);

  const data = result.map((avatar) => {
    return {
      id: crypto.randomUUID(),
      src: avatar.url,
      name: `${avatar.first_name} ${avatar.last_name}`,
    };
  });

  return Response.json(data);
}
