# mapa-internet-co_v2
Mapa de analisis internet en Colombia Clusterizado


# ANÁLISIS DE ACCESOS A INTERNET FIJO CON CLUSTERS
## Colombia · Versión 2 · Guía Completa

---

## 📋 DESCRIPCIÓN

Visualización geográfica interactiva de accesos a internet fijo en Colombia, organizada por clusters, tipos de empresa y categorías predefinidas de la base de datos.

**Sin scoring ni ranking** — todos los campos de clasificación se usan directamente desde la base.

---

## 🗂️ ESTRUCTURA DEL PROYECTO

```
Proyecto_Clusters_Internet/
│
├── 01_Datos_Entrada/
│   ├── BD-ACCESOS_INTERNET_FIJO_3_Cluesters.xlsx   ← base principal
│   └── F2_6_RETARDO_EN_UN_SENTIDO.xlsx             ← latencia
│
├── 02_Scripts/
│   ├── generar_municipios_clusters.py              ← Paso 1: procesar datos
│   └── index_pro_clusters.py                       ← Paso 4: mejorar HTML
│
├── 03_Datos_Salida/
│   ├── municipios_clusters_para_qgis.csv
│   └── empresas_completo_v2.csv
│
├── 04_Mapa_Web/
│   └── index.html
│
└── 05_Documentacion/
    ├── README_PROYECTO_CLUSTERS.md      ← este archivo
    ├── SUGERENCIAS_SIMBOLIZACION.md
    └── TUTORIAL_GIT_GITHUB.md
```

---

## 💻 REQUISITOS

| Software | Versión | Descarga |
|----------|---------|----------|
| Python | 3.7+ | python.org |
| QGIS Desktop | 3.28+ | qgis.org |
| Plugin qgis2web | Cualquiera | Dentro de QGIS |
| Navegador moderno | Chrome/Firefox | — |

```bash
# Instalar librerías Python
pip install pandas openpyxl numpy
```

---

## 🚀 FLUJO COMPLETO (5 pasos)

```
PASO 1  python generar_municipios_clusters.py
        Input:  BD-ACCESOS... xlsx + F2_6_RETARDO... xlsx
        Output: municipios_clusters_para_qgis.csv
        Tiempo: ~2 min

PASO 2  QGIS: cargar shapefile + CSV → JOIN → simbolizar
        Tiempo: ~15 min

PASO 3  QGIS → qgis2web → exportar carpeta con index.html
        Tiempo: ~5 min

PASO 4  python index_pro_clusters.py
        Input:  index.html de qgis2web
        Output: index.html mejorado
        Tiempo: ~30 seg

PASO 5  Publicar en GitHub Pages / Netlify / servidor
        Tiempo: ~5 min
```

---

## ⚙️ PASO 1 EN DETALLE — SCRIPT Python

```bash
# Editar las variables al inicio del script si cambian los nombres de archivo:
ARCHIVO_ACCESOS  = 'BD-ACCESOS_INTERNET_FIJO_3_Cluesters.xlsx'
ARCHIVO_LATENCIA = 'F2_6_RETARDO_EN_UN_SENTIDO.xlsx'
ANNO_ANALISIS      = 2025
TRIMESTRE_ANALISIS = 3
```

**Salida: municipios_clusters_para_qgis.csv**

Columnas principales:

| Columna | Fuente | Descripción |
|---------|--------|-------------|
| ID_MUNICIPIO_5D | Base | Código DANE 5 dígitos |
| MUNICIPIO, DEPARTAMENTO | Base | Nombre |
| Plaza | Shapefile | Campo del shapefile — vacío hasta el JOIN en QGIS |
| Accesos_Totales | Calculado | Suma todos los accesos del municipio |
| Accesos_Fibra | Calculado | Solo accesos FTTH |
| Porc_Fibra | Calculado | % fibra sobre total |
| Vel_Down/Up_Promedio | Calculado | Promedio de velocidades |
| Latencia_Promedio | Base latencia | Dato más reciente por empresa |
| Cluster_Predominante | Base (moda) | NOM_CLUSTER más frecuente |
| Empresa_Lider | Base | Empresa con más accesos |
| Tipo_Empresa_Lider | Base directa | TIPO EMPRESA de la líder |
| Categoria_Lider | Base directa | CATEGORIAQ3-2025 de la líder |
| Rango_Lider | Base directa | RANGO Q3-2025 de la líder |
| Num_RANGO_* | Conteo directo | Filas por cada valor de RANGO Q3-2025 |
| Num_TIPO_* | Conteo directo | Filas por cada valor de TIPO EMPRESA |
| Num_CAT_* | Conteo directo | Filas por cada valor de CATEGORIAQ3-2025 |
| Num_CLUSTER_* | Conteo directo | Filas por cada NOM_CLUSTER |
| Num_SEG_* | Conteo directo | Filas por cada SEGMENTO |
| Num_DEPTO_* | Conteo directo | Filas por cada DEPARTAMENTO |
| Popup_HTML | Generado | HTML completo del popup |

---

## 🗺️ PASO 2 EN DETALLE — QGIS

### 2.1 Cargar capas

1. **Shapefile de municipios:**
   - Capa → Añadir capa → Añadir capa vectorial
   - Seleccionar el archivo `.shp`
   - El campo clave es `MpCodigo` (código DANE 5 dígitos)

2. **CSV:**
   - Capa → Añadir capa → Añadir capa de texto delimitado
   - Archivo: `municipios_clusters_para_qgis.csv`
   - Definición de geometría: **Sin geometría (solo tabla de atributos)**

### 2.2 Hacer el JOIN

1. Click derecho en shapefile → **Propiedades** → pestaña **Uniones**
2. Click botón verde **+**

```
Unir capa        : municipios_clusters_para_qgis
Campo de unión   : ID_MUNICIPIO_5D
Campo destino    : MpCodigo
Prefijo          : (dejar vacío)
✅ Campos unidos: todos
```

3. **Aplicar → OK**

> ⚠️ El campo **Plaza** del shapefile se une automáticamente si existe en `MpCodigo`.
> Asegúrate de que `MpCodigo` en el shapefile tiene formato de 5 dígitos (con ceros a la izquierda).
> Si no: Field Calculator → `lpad(to_string("MpCodigo"), 5, '0')`

### 2.3 Configurar el Popup HTML

1. Propiedades → **Visualización**
2. HTML Map Tip:
   ```
   [% "Popup_HTML" %]
   ```
3. ✅ Activar Map Tips (menú Ver → Mostrar sugerencias de mapa)

### 2.4 Simbolización

Ver `SUGERENCIAS_SIMBOLIZACION.md` para 10 opciones detalladas.

**Opción rápida — por Cluster:**
- Simbología → **Categorizado** → Valor: `Cluster_Predominante` → Clasificar

**Opción rápida — por Accesos Totales:**
- Simbología → **Graduado** → Valor: `Accesos_Totales`
- Método: Natural Breaks · 6 clases · Rampa YlOrRd

---

## 🌐 PASO 3 EN DETALLE — qgis2web

1. Menú **Web → qgis2web → Crear mapa web**
2. Pestaña **Capas y grupos:** activar shapefile con JOIN
3. Pestaña **Apariencia:**
   - ✅ Añadir lista de capas
   - ✅ Resaltar al pasar ratón
4. Pestaña **Exportar:**
   - Exportador: **Leaflet**
   - Precisión: 5
   - ✅ Minificar archivos GeoJSON
5. Click **Exportar** → seleccionar carpeta destino

---

## ✨ PASO 4 EN DETALLE — index_pro_clusters.py

```bash
python index_pro_clusters.py
```

1. Seleccionar el `index.html` exportado de QGIS
2. Primera ejecución: seleccionar carpeta destino (se guarda en `config_path_clusters.txt`)
3. Listo — el script añade automáticamente:

| Elemento | Descripción |
|----------|-------------|
| Título | "📊 Análisis de Internet · Colombia Versión 2" |
| Buscador | Busca municipio, departamento y empresa en tiempo real |
| Filtros | 6 filtros dinámicos (ver abajo) |
| Popups | 340px de ancho, scroll funcional, Plaza en header |

### Filtros dinámicos

Los filtros se construyen **automáticamente** leyendo los datos reales del GeoJSON.
Los valores de cada checkbox corresponden exactamente a los sufijos de las columnas `Num_*` del CSV:

| Filtro | Columnas usadas | Campo base |
|--------|----------------|------------|
| 📏 Por Rango de Tamaño | `Num_RANGO_*` | `RANGO Q3-2025` |
| 🏢 Por Tipo de Empresa | `Num_TIPO_*` | `TIPO EMPRESA` |
| ⭐ Por Categoría | `Num_CAT_*` | `CATEGORIAQ3-2025` |
| 👤 Por Segmento | `Num_SEG_*` | `SEGMENTO` |
| 🗺️ Por Departamento | `Num_DEPTO_*` | `DEPARTAMENTO` |
| 🗂️ Por Cluster | `Num_CLUSTER_*` | `NOM_CLUSTER` |
| 🏙️ Por Plaza | `Num_PLAZA_*` | `Plaza` (shapefile) |

### Buscador

- Mínimo 2 caracteres para activar
- Busca en: **nombre municipio**, **departamento**, **plaza** y **nombre de empresa**
- Muestra hasta 12 resultados con empresa coincidente
- Click → centra mapa, abre popup, resalta municipio 2.5 segundos

### Popup — borde izquierdo de empresas

El color del borde izquierdo de cada tarjeta es la **CATEGORIAQ3-2025** directamente de la base:

| Color | Categoría |
|-------|-----------|
| 🟩 Verde oscuro | A |
| 🟢 Verde | B |
| 🟡 Amarillo | C |
| 🟠 Naranja | D |
| 🔴 Rojo | E |

---

## 🔧 CAMBIAR ETIQUETAS DE TAMAÑO

Si quieres cambiar `"Mas de 2k Menos 10K"` por `"Mediano"`:

**Opción A — Editar el Excel (más sencillo):**
1. Abrir `BD-ACCESOS_INTERNET_FIJO_3_Cluesters.xlsx`
2. Columna `RANGO Q3-2025` → Buscar y Reemplazar
3. Guardar → re-ejecutar `generar_municipios_clusters.py`
4. El filtro usará automáticamente el nuevo nombre

**Opción B — Mapeo en el script Python:**

En `generar_municipios_clusters.py`, añadir después de `df = df_acc[...].copy()`:
```python
mapeo_rangos = {
    'Mas de 100K'            : 'Gigante',
    'Mas de 50K menos de 100k': 'Muy Grande',
    'mas de 10K menos de 50K' : 'Grande',
    'Mas de 2k Menos 10K'    : 'Mediano',
    'Menos de 2K'             : 'Pequeño',
}
df['RANGO Q3-2025'] = df['RANGO Q3-2025'].replace(mapeo_rangos)
```

Los filtros del mapa usarán los nuevos nombres automáticamente.

---

## ⚠️ SOLUCIÓN DE PROBLEMAS

**JOIN no funciona / columnas del CSV no aparecen en shapefile:**
- Verificar que `MpCodigo` tiene 5 dígitos con cero inicial: `05001`, no `5001`
- Verificar que ambos campos son tipo texto en QGIS
- Si `MpCodigo` es número: Field Calculator → `lpad(to_string("MpCodigo"),5,'0')`

**Popup muestra código HTML crudo (`<div>...`):**
- Propiedades → Visualización → HTML Map Tip debe contener exactamente: `[% "Popup_HTML" %]`
- Activar: Ver → Mostrar sugerencias de mapa

**Filtros no muestran ningún municipio:**
- Verificar que el CSV fue regenerado con el script actualizado v2.2
- Abrir DevTools del navegador (F12) → Console → buscar errores
- Verificar que las columnas `Num_RANGO_*` existen en el CSV

**Popup muy pequeño / sin scroll:**
- Asegurarse de ejecutar `index_pro_clusters.py` después de la exportación de qgis2web
- El script configura popup 340px con scroll de 600px

**Buscador no encuentra empresas:**
- El buscador extrae las empresas del HTML del popup
- Verificar que el popup tiene los emojis de tipo empresa (🔴🟠🟡🟢🔵⚪🟣⚫)

**ModuleNotFoundError:**
```bash
pip install pandas openpyxl numpy
```

---

## 📊 VALORES DE FILTRO DISPONIBLES (datos reales)

### RANGO Q3-2025
```
Mas de 100K
Mas de 50K menos de 100k
mas de 10K menos de 50K
Mas de 2k Menos 10K
Menos de 2K
```

### TIPO EMPRESA
```
LIDER A · LIDER B
ISP A · ISP B · ISP C · ISP D
ESTATALES
```

### CATEGORIAQ3-2025
```
A · B · C · D · E
```

---

## 📁 PUBLICACIÓN

**GitHub Pages (gratuito):** ver `TUTORIAL_GIT_GITHUB.md`

**Netlify (más simple):**
1. Ir a https://app.netlify.com/drop
2. Arrastrar la carpeta del mapa
3. URL automática en 30 segundos

---

**Versión 2.2 · Febrero 2026 · Proyecto Clusters Internet Colombia**

