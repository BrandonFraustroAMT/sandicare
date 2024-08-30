/** @type {import('next').NextConfig} */
export async function exportPathMap(defaultPathMap,
    { dev, dir, outDir, distDir, buildId }) {
    // Elimina rutas específicas de la exportación estática
    delete defaultPathMap['/checkatusaludpt'];
    delete defaultPathMap['/conocenospt'];
    delete defaultPathMap['/sandicheckpt'];
    delete defaultPathMap['/telemedicinapt'];

    return defaultPathMap;
}
