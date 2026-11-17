/* DATA STRUCTURES VOCABULARY: shared by Spin the Wheel, Term Clinic and the partner games.
   Each term: [WORD, emoji, plain meaning, everyday analogy, example / where you see it] */
window.DS_GROUPS = [
  { id: "models", name: "Raster & vector", color: "#1f6f6a", intro: "The two core ways a GIS stores the world.", terms: [
    ["RASTER", "🔲", "A grid of square cells. Each cell holds one value, and the grid covers the whole area.", "A sheet of graph paper with a number written in every square.", "Elevation, land cover, satellite images."],
    ["VECTOR", "📐", "Data built from x,y coordinates: points, lines and polygons with exact edges.", "A dot-to-dot drawing where you only store the dots.", "Roads, parcels, fire hydrants, rivers."],
    ["CELL SIZE", "📏", "The width of one raster cell on the ground. A 10 m cell covers 10 × 10 = 100 m².", "The size of the tiles on a bathroom floor.", "Halve the cell size and you store 4× as many cells."],
    ["POINT", "📍", "A single x,y location: the simplest vector feature.", "A pin stuck in a map.", "Wells, hydrants, trees, GPS sample sites."],
    ["LINE", "〰️", "Points connected in order to form a path. Its attributes describe the whole line.", "A string laid along a route on a map.", "Roads, streams, power lines."],
    ["POLYGON", "⬟", "Lines that close to form an area. Its attributes describe the whole shape.", "A fence around a field.", "Lakes, parcels, counties, building footprints."],
    ["FEATURE CLASS", "🗃️", "A collection of features of the same kind (all points, all lines or all polygons) with the same attribute fields.", "A drawer that holds only one type of thing.", "A ‘Buildings’ layer: each row is one building."],
    ["MULTI-BAND", "🥞", "Several rasters with the same cells stacked in one file, so each cell holds several values.", "A stack of pancakes, one for each colour.", "Red, green and blue bands make an aerial photo."]
  ]},
  { id: "types", name: "Attribute data types", color: "#3d7fc4", intro: "What kind of value each field can hold.", terms: [
    ["DATA TYPE", "🏷️", "The kind of value a field holds. It decides what maths is possible and how much space is used.", "Labelled boxes: you can't pour soup into the egg carton.", "5 × 5 = 25, but Basketball × Soccer = ?"],
    ["SHORT INTEGER", "🔢", "Whole numbers from −32,768 to 32,767, stored in 16 bits.", "A small jar for small numbers.", "Slope in degrees (0–90)."],
    ["LONG INTEGER", "🔟", "Whole numbers up to about ±2.1 billion, stored in 32 bits.", "A big jar for big whole numbers.", "Population counts, IDs."],
    ["FLOAT", "🎈", "A single-precision decimal number. The decimal point can ‘float’ to wherever it's needed.", "A ruler with fine marks, but not the finest.", "Temperature 21.6 °C."],
    ["DOUBLE", "🎯", "A double-precision decimal: more precise and a bigger range than a float, using twice the storage.", "A ruler with the finest marks you can get.", "Water depth 2.371 m, coordinates."],
    ["STRING", "🧵", "Text: letters and characters tied together. Numbers stored as text can't do maths.", "Beads threaded on a string.", "Names, land-cover classes, ZIP code “02134”."],
    ["NULL", "❓", "A blank value meaning “we don't know”. It is not zero.", "An empty answer box on a test, not a wrong answer.", "A broken rain gauge's reading should be Null, not 0."]
  ]},
  { id: "rel", name: "Relational tables", color: "#b0563f", intro: "Splitting data into tables and joining it back together.", terms: [
    ["RELATIONAL DATABASE", "🗄️", "A database of several tables that link to each other through common fields (an RDBMS). You query it with SQL.", "A school office with separate binders for students, classes and grades, linked by student ID.", "Microsoft Access, MySQL, SQL Server, geodatabases."],
    ["PRIMARY KEY", "🔑", "A field that uniquely identifies each record. Usually an auto-number that never changes.", "Your student ID number.", "Sites.ID = 1, 2, 3…"],
    ["FOREIGN KEY", "🔗", "A field that holds the primary key of a record in another table, to link the two.", "Writing a friend's student ID on your group form.", "Observations.Site_ID → Sites.ID"],
    ["JOIN", "🤝", "Appends the attributes of one table onto matching records of another, using a common field.", "Stapling a matching worksheet to each student's report.", "Join population data to counties by county ID."],
    ["RELATE", "🧷", "An ArcGIS link between tables that doesn't copy the data, used when ONE feature matches MANY records.", "A sticky note saying “see binder 2, page 5”.", "One river site → many daily readings."],
    ["ONE-TO-MANY", "🌳", "One record in a table matches many records in another.", "One teacher, many students.", "One site, many observations."],
    ["MANY-TO-MANY", "🕸️", "Many records match many records. It needs an in-between table of ID pairs.", "Students and clubs: each student joins many clubs, each club has many students.", "Observers ↔ Observations via Observers_Observations."]
  ]},
  { id: "fmt", name: "Storage formats", color: "#8a5bb8", intro: "The containers we save GIS data in.", terms: [
    ["SHAPEFILE", "📦", "An old but widely used vector format that is really a family of files: .shp, .shx, .dbf, .prj and more.", "A board game: lose one box of pieces and you can't play.", "Field names max 10 characters; each file max 2 GB."],
    ["FILE GEODATABASE", "🗂️", "Esri's main storage format: a .gdb folder holding feature classes, tables and rasters, with almost no size limits.", "A well-organised filing cabinet.", "Zip the whole .gdb folder to share it."],
    ["PERSONAL GEODATABASE", "📒", "An older geodatabase stored in one Microsoft Access .mdb file, limited to 2 GB.", "A notebook: handy and single, but runs out of pages.", "Legacy: can't be created in ArcGIS Pro."],
    ["GEOPACKAGE", "🎁", "An open, single-file (.gpkg) format based on SQLite that almost every GIS can read.", "A universal phone charger that fits every phone.", "Sharing data with QGIS users."],
    ["FEATURE DATASET", "📁", "A folder inside a geodatabase that forces every feature class in it to share one coordinate system.", "A team where everyone must speak the same language.", "Streams, roads and sites in one projection."],
    ["RELATIONSHIP CLASS", "🧬", "A relate saved permanently inside a geodatabase, so it travels with the data.", "Writing the link in pen instead of pencil.", "NHDPlus attributes ↔ flowlines by COMID."]
  ]},
  { id: "surf", name: "Surfaces & compression", color: "#c4932f", intro: "Modelling terrain and storing data efficiently.", terms: [
    ["TIN", "🔺", "Triangulated Irregular Network: x,y,z points joined into triangles to model a surface.", "A geodesic dome or a low-poly video-game mountain.", "Engineering sites, LiDAR terrain."],
    ["DEM", "⛰️", "Digital Elevation Model: a raster where each cell holds the ground height.", "A height map made of graph paper.", "Flood models, slope maps."],
    ["BREAKLINE", "✂️", "A line where the surface changes sharply, like a ridge, cliff or stream bank. TINs keep these exact.", "The crease in a folded paper.", "Levee tops, road edges, river banks."],
    ["QUADTREE", "🪟", "Splits a grid into 4 quadrants again and again until each block is all one value.", "Cutting a pizza only where the toppings change.", "Compressing land-cover rasters; map tile zoom levels."],
    ["RUN-LENGTH ENCODING", "🏃", "Stores each run of repeated values as (value, count).", "Saying “five 2s” instead of “2, 2, 2, 2, 2”.", "1 1 1 1 3 3 → (1,4)(3,2)"],
    ["LOSSLESS", "💯", "Compression that rebuilds every value exactly.", "Folding a shirt: unfold it and it's the same shirt.", "RLE, LZW, Deflate. Safe for category codes."],
    ["LOSSY", "🫠", "Compression that throws away some detail to save space.", "A photocopy of a photocopy.", "JPEG, MrSID. Fine for photos, bad for land-cover codes."]
  ]},
  { id: "find", name: "Retrieval & sharing", color: "#2f8f4f", intro: "Finding data fast, putting it in the right place, and sharing it.", terms: [
    ["SPATIAL INDEX", "🧭", "A lookup of which features sit in which area, so searches skip everything far away.", "The grid letters and numbers on a city map (B4, C7).", "Grids, quadtrees, R-trees. Built automatically in geodatabases."],
    ["ATTRIBUTE INDEX", "📇", "A sorted lookup of the values in a field, so queries and joins on it run fast.", "The index at the back of a textbook.", "Index Street_Name or COMID."],
    ["COORDINATE SYSTEM", "🌐", "The reference that gives x,y numbers a real place on Earth: geographic (lat/long) or projected (metres).", "The street-address system of the planet.", "WGS84 (EPSG:4326), UTM, State Plane."],
    ["GEOREFERENCING", "📌", "Lining up a scanned map or image with real-world coordinates using control points.", "Pinning a paper map onto the right spot of a wall map.", "Old paper flood maps, aerial photos. Saves a world file."],
    ["RE-PROJECTION", "🔄", "Converting data from one coordinate system to another. Precise for vectors, lossy for rasters.", "Translating a sentence: rasters lose a little meaning.", "Rasters get resampled onto a new grid."],
    ["INTEROPERABILITY", "🤝", "The ability of different systems to exchange and use the same data.", "A plug that works in every country's socket.", "Open standards (OGC), GeoPackage, GeoJSON, GDAL."],
    ["METADATA", "📝", "Data about data: who made it, when, how, in what coordinate system and how accurate.", "The nutrition label on food.", "ISO 19115, FGDC, .xml files."]
  ]}
];

/* MNEMONIC SONGS & CHANTS: original words set to well-known public-domain tunes (or a stomp-clap beat). */
window.DS_SONGS = {
  models: { title: "Raster & Vector Row", tune: "Row, Row, Row Your Boat", lines: [
    "Raster is a grid, cells all side by side,",
    "One value in every cell, covering far and wide.",
    "Vector's points and lines, polygons so fine,",
    "Raster's faster, vector's corrector: pick the right one every time!"
  ]},
  types: { title: "Twinkle Data Types", tune: "Twinkle, Twinkle, Little Star", lines: [
    "Short is small and long is tall,",
    "Whole numbers, that is all.",
    "Float and double hold the decimals,",
    "Double's the most precise of all.",
    "Text is letters on a string,",
    "Null means “we don't know the thing!”"
  ]},
  rel: { title: "Key Jacques", tune: "Frère Jacques (Are You Sleeping?)", lines: [
    "Primary key, primary key,",
    "One of a kind, one of a kind!",
    "Foreign key points to it, foreign key points to it,",
    "Tables joined! Tables joined!",
    "(Echo) One-to-one… one-to-many… many-to-many needs a table in between!"
  ]},
  fmt: { title: "The Shapefile Stomp", tune: "Stomp, stomp, CLAP! (stadium chant beat)", lines: [
    "S-H-P! (stomp stomp CLAP)",
    "S-H-X! (stomp stomp CLAP)",
    "D-B-F! (stomp stomp CLAP)",
    "And the P-R-J! (stomp stomp CLAP)",
    "Shape, index, table, projection: send them all, the whole collection!",
    "G-P-K-G: one file, open, read it free!"
  ]},
  surf: { title: "Old MacDonald Had a Map", tune: "Old MacDonald Had a Farm", lines: [
    "Old MacDonald had a map, E-I-E-I-O,",
    "And on that map he had a TIN, E-I-E-I-O,",
    "With an x, y, z here, and a triangle there,",
    "Small ones where it's steep, big ones where it's flat!",
    "Quadtree splits in four, four, four, till each block's one colour, no more,",
    "Lossless keeps it all, but lossy lets some go!"
  ]},
  find: { title: "Index Bridge", tune: "London Bridge Is Falling Down", lines: [
    "Spatial index finds it fast, finds it fast, finds it fast,",
    "Skip the far stuff, zoom right past: same answer, quicker!",
    "Georeference with control points, control points, control points,",
    "Pin the old map to the joints of the real world!",
    "Open formats share with all, share with all, share with all,",
    "GeoPackage, one file for all: interoperable!"
  ]}
};
window.DS_CHANT = { title: "Null vs Zero (call and response)", lines: [
  "Teacher: “What does NULL mean?” Class: “I don't know!”",
  "Teacher: “What does ZERO mean?” Class: “I know: it's zero!”"
]};
