export default {
  async fetch(request, env) {
    // まずは静的アセットを探す
    const assetResponse = await env.ASSETS.fetch(request).catch(() => null)
    if (assetResponse && assetResponse.ok) return assetResponse

    // ↑で見つからなければカスタムレスポンス
    return new Response("Not Found", { status: 404 })
  }
}