/**
 * Catch all segments
 * [...slug] normal senario
 * [[...slug]] make slug segments optionla
 */

export default async function Docs({ params }: {params: Promise<{slug: string[]}>}) {
    const {slug} = await params;
    return <h1>Docs {JSON.stringify(slug)}</h1>
}