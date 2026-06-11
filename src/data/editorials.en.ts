import type { EventEditorial } from "./editorials";

export const eventEditorialsEn: Record<string, EventEditorial> = {
  "inside-other-spaces": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "From an exhibition to look at, to an environment to move through.",
    introduction:
      "Rather than treating sculpture or painting as isolated objects, this exhibition focuses on environments completed by visitors entering and moving through them. Works made by 11 pioneering women artists between 1956 and 1976 bring light, color, sound and the body together.",
    facts: [
      { label: "ARTISTS", value: "11 women artists" },
      { label: "HISTORICAL RANGE", value: "1956–1976" },
      { label: "FORMAT", value: "Environment · Installation · Multisensory" },
      { label: "VENUE", value: "Black Box · Ground Gallery" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "1956–1976",
        title: "Experiments in environments",
        description:
          "Artists blurred the boundary between artwork and exhibition space, drawing the visitor's body into the work.",
      },
      {
        marker: "NOW",
        title: "Names left outside art history",
        description:
          "The exhibition reconnects practices by women artists who remained underrepresented for decades.",
      },
      {
        marker: "2026",
        title: "Reconstructed at Leeum",
        description:
          "Across the Black Box and Ground Gallery, the works form new relationships with the architecture and each visitor's movement.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / BODY",
        title: "The visitor's body",
        description:
          "Enter, walk around and change your viewpoint instead of stopping in front of the work.",
      },
      {
        label: "02 / SENSE",
        title: "The density of color and light",
        description:
          "Notice how reflection, distance, direction and changing light alter the experience beyond form alone.",
      },
      {
        label: "03 / HISTORY",
        title: "An incomplete art history",
        description:
          "Consider why these practices remained outside established narratives and how their historical context shaped them.",
      },
    ],
    locationNote:
      "The exhibition occupies Leeum's Black Box and Ground Gallery. Several works are designed to be entered, so allow enough time to move through the spaces slowly.",
    notes: [
      {
        label: "RESERVATION",
        title: "Check advance booking",
        description:
          "Confirm your date and entry time on Leeum's official booking page. Admission may be limited depending on on-site conditions.",
      },
      {
        label: "CLOSED",
        title: "Closed Mondays",
        description:
          "Opening hours are Tuesday through Sunday, 10:00 to 18:00.",
      },
    ],
    sources: [
      {
        label: "LEEUM EXHIBITION",
        url: "https://www.leeumhoam.org/leeum/exhibition/93?params=Y",
      },
    ],
  },
  "damien-hirst-mmca": {
    typeLabel: "ARTIST / EXHIBITION PROFILE",
    heading: "Death, belief and value: the questions Hirst keeps returning to.",
    introduction:
      "Asia's first major Damien Hirst survey spans installations, sculpture and painting from his early career to recent work. Formaldehyde vitrines, medicine cabinets, spot and spin paintings and the diamond skull connect life and death with science, religion, art and the market.",
    facts: [
      { label: "SCALE", value: "First major survey in Asia" },
      { label: "MEDIA", value: "Installation · Sculpture · Painting" },
      { label: "KEY THEMES", value: "Death · Immortality · Belief · Market" },
      { label: "ADMISSION", value: "KRW 8,000" },
    ],
    timelineLabel: "SELECTED CHRONOLOGY",
    timeline: [
      {
        marker: "1986",
        title: "Spot paintings",
        description:
          "Ordered color dots and a system of production question the artist's hand, repetition and how art is made.",
      },
      {
        marker: "1990",
        title: "A Thousand Years",
        description:
          "Birth and death repeat as an actual biological cycle inside a glass vitrine.",
      },
      {
        marker: "1991",
        title: "The Physical Impossibility of Death in the Mind of Someone Living",
        description:
          "A shark suspended in formaldehyde confronts viewers with a death they can see but cannot fully imagine.",
      },
      {
        marker: "2007",
        title: "For the Love of God",
        description:
          "A platinum, diamond and human-tooth skull brings immortality, luxury and the price of art into one object.",
      },
      {
        marker: "2026",
        title: "MMCA Seoul",
        description:
          "Major works and previously unseen recent pieces connect the full arc of Hirst's practice.",
      },
    ],
    highlightsLabel: "SELECTED WORKS",
    highlights: [
      {
        label: "WORK / 1991",
        title: "The Physical Impossibility of Death in the Mind of Someone Living",
        meta: "Glass · Steel · Shark · Formaldehyde solution",
        description:
          "A defining work from the Natural History series, colliding the material fact of death with the viewer's psychological distance.",
      },
      {
        label: "WORK / 2007",
        title: "For the Love of God",
        meta: "Platinum · Diamonds · Human teeth",
        description:
          "A symbol of death covered in extreme luxury compresses the desire for permanence and the logic of the market.",
      },
      {
        label: "WORK / 2000",
        title: "The Fragility of Love",
        meta: "Beach ball · Knife · Blower",
        description:
          "A beach ball floating above a blade turns balance, anxiety and the fragility of life into a simple, tense image.",
      },
    ],
    gallery: [
      {
        src: "/editorial/damien-hirst/shark.jpg",
        alt: "A shark suspended in a formaldehyde vitrine",
        caption: "The Physical Impossibility of Death in the Mind of Someone Living, 1991",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
      {
        src: "/editorial/damien-hirst/diamond-skull.jpg",
        alt: "A skull covered with diamonds",
        caption: "For the Love of God, 2007",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
      {
        src: "/editorial/damien-hirst/vitrine.jpg",
        alt: "Objects arranged inside a glass vitrine",
        caption: "A vitrine installation addressing life, death, science and belief",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
      {
        src: "/editorial/damien-hirst/beach-ball.jpg",
        alt: "A beach ball floating above a knife blade",
        caption: "The Fragility of Love, 2000",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
    ],
    locationNote:
      "The exhibition extends across B1, Galleries 3, 4 and 5, MMCA Studio on the second floor and Seoul Box. Check the route so you do not finish after seeing only one section.",
    notes: [
      {
        label: "CONTENT NOTE",
        title: "Animal specimens and biological material",
        description:
          "The exhibition includes preserved animals and direct representations of death. Review the works in advance if you are sensitive to this material.",
      },
      {
        label: "AUDIO GUIDE",
        title: "Official guide with 20 entries",
        description:
          "MMCA's official page provides an exhibition introduction and audio commentary for key works.",
      },
      {
        label: "LAST DATE",
        title: "Ends June 28, 2026",
        description:
          "The exhibition is approaching its final date. Wednesday and Saturday hours extend to 21:00.",
      },
    ],
    sources: [
      {
        label: "MMCA EXHIBITION",
        url: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
    ],
  },
  "hyundai-super-concert-28": {
    typeLabel: "ARTIST PROFILE",
    heading: "From shadowy R&B to the center of stadium pop.",
    introduction:
      "The Weeknd is a Canadian singer, songwriter and producer who has expanded R&B through electronic music, pop and hip-hop. Album-scale characters, cinematic narratives and monumental stage design have made him one of contemporary pop's most influential figures.",
    facts: [
      { label: "KOREA", value: "Second visit · After 8 years" },
      { label: "SHOWS", value: "Oct 7–8, 2026 · 2 shows" },
      { label: "OPENING", value: "Creepy Nuts · 18:45" },
      { label: "AGE", value: "19+" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2011",
        title: "The early mixtape trilogy",
        description:
          "He first drew attention with dark, cinematic alternative R&B and an almost anonymous public presence.",
      },
      {
        marker: "2015",
        title: "Beauty Behind the Madness",
        description:
          "Can't Feel My Face and The Hills moved an underground sensibility into the center of global pop.",
      },
      {
        marker: "2019–2020",
        title: "Blinding Lights / After Hours",
        description:
          "Synth-pop and a tragic character arc combined into the defining era of his career.",
      },
      {
        marker: "2025",
        title: "Hurry Up Tomorrow",
        description:
          "His sixth studio album signaled a transition beyond the character known as The Weeknd.",
      },
      {
        marker: "2026",
        title: "Second Korean performance",
        description:
          "Eight years after his 2018 debut in Korea, he returns for two stadium shows in Goyang.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2019",
        title: "Blinding Lights",
        meta: "After Hours",
        description:
          "Eighties synth-pop texture and an immediate melody meet in his signature global hit.",
      },
      {
        label: "TRACK / 2016",
        title: "Starboy",
        meta: "Starboy",
        description:
          "A collaboration with Daft Punk that sharply reconstructs his image and desire as a pop star.",
      },
      {
        label: "TRACK / 2015",
        title: "Can't Feel My Face",
        meta: "Beauty Behind the Madness",
        description:
          "A turning-point single pairing a Michael Jackson-like hook with darker metaphor.",
      },
    ],
    gallery: [
      {
        src: "/editorial/the-weeknd/profile.jpg",
        alt: "Official portrait of The Weeknd against a white background",
        caption: "The Weeknd",
        credit: "Image: Hyundai Card DIVE",
        sourceUrl:
          "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
      },
      {
        src: "/editorial/the-weeknd/stage.jpg",
        alt: "The Weeknd performing under red stage lighting",
        caption: "The dramatic stadium production of After Hours Til Dawn",
        credit: "Image: Hyundai Card DIVE",
        sourceUrl:
          "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
      },
    ],
    locationNote:
      "This is an outdoor stadium show at Goyang Stadium, within walking distance of Exit 3 at Daehwa Station. Plan your route home in advance for the heavy crowds after the show.",
    notes: [
      {
        label: "KOREA RETURN",
        title: "A second visit after eight years",
        description:
          "This is his second Korean appearance after the 2018 debut, now expanded to two stadium nights.",
      },
      {
        label: "RUNNING ORDER",
        title: "Creepy Nuts 18:45 / The Weeknd 19:45",
        description:
          "The opening act begins one hour before the headliner. Allow time for entry and security screening.",
      },
      {
        label: "TICKET",
        title: "Sold out on the official page",
        description:
          "Prices and seat information on unofficial resale channels may be unreliable. Check the official seller for changes or additional releases.",
      },
    ],
    sources: [
      {
        label: "HYUNDAI CARD DIVE",
        url: "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
      },
    ],
  },
  "silica-gel-ballad-of-you": {
    typeLabel: "ARTIST PROFILE",
    heading: "Four creators designing sound and image as one.",
    introduction:
      "Silica Gel is a Korean psychedelic rock band formed by Hanjoo Kim, Chunchu Kim, Geonjae Kim and Woonghee Choi. Emerging from an audiovisual project among university peers, the group treats music, video and stage direction as one continuous experience.",
    facts: [
      { label: "MEMBERS", value: "Four-piece band" },
      { label: "START", value: "Project formed in 2013" },
      { label: "TOUR", value: "First Asia tour" },
      { label: "SEOUL", value: "KSPO DOME · 2 shows" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2015–2017",
        title: "Debut and Rookie of the Year",
        description:
          "After releasing an EP and first album, the band won the EBS Hello Rookie grand prize and Korean Music Awards Rookie of the Year.",
      },
      {
        marker: "2020",
        title: "Return with Kyo181",
        description:
          "The group reformed as a four-piece after a military-service hiatus and introduced a new sound.",
      },
      {
        marker: "2021–2023",
        title: "From Desert Eagle to POWER ANDRE 99",
        description:
          "Desert Eagle, NO PAIN and Tik Tak Tok led into the complete world of the band's second full-length album.",
      },
      {
        marker: "2024",
        title: "Korean Music Awards Musician of the Year",
        description:
          "The award recognized the band's simultaneous experimentation and expansion into a wider audience.",
      },
      {
        marker: "2026",
        title: "Ballad of You",
        description:
          "The band's first Asia tour opens with two Seoul shows at KSPO DOME.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2022",
        title: "NO PAIN",
        meta: "Best Modern Rock Song",
        description:
          "A rushing band sound and declarative chorus made this a major turning point for Silica Gel.",
      },
      {
        label: "TRACK / 2023",
        title: "Tik Tak Tok",
        meta: "feat. So!YoON!",
        description:
          "Sharp guitar riffs cross So!YoON!'s voice, revealing the band's rhythmic precision and range.",
      },
      {
        label: "TRACK / 2021",
        title: "Desert Eagle",
        meta: "Best Modern Rock Song",
        description:
          "The track captures the concentrated playing and psychedelic development of the renewed four-piece.",
      },
    ],
    locationNote:
      "The concert runs for two nights at KSPO DOME in Olympic Park. Standing and reserved seating may use different entry procedures, so check the notice for your ticket type.",
    notes: [
      {
        label: "FIRST TOUR",
        title: "Silica Gel's first Asia tour",
        description:
          "The Seoul concerts are not only standalone shows but the starting point for the cities that follow.",
      },
      {
        label: "TWO NIGHTS",
        title: "Saturday 18:00 / Sunday 17:00",
        description:
          "Start times differ by date. Include mobile-ticket checks and entry queues in your plans.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://tickets.interpark.com/goods/26007703",
      },
      {
        label: "APPLE MUSIC ARTIST PROFILE",
        url: "https://music.apple.com/kr/artist/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94/1031084591",
      },
      {
        label: "KOREAN MUSIC AWARDS",
        url: "https://koreanmusicawards.com/project/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94silica-gel-no-pain/",
      },
    ],
  },
  "post-malone-seoul": {
    typeLabel: "ARTIST PROFILE",
    heading: "A star layering hip-hop, pop, rock and country into one voice.",
    introduction:
      "Post Malone is an American singer-songwriter whose loose vocal style and melodies cross genre boundaries. F-1 Trillion expanded his range into country in 2024, and this stadium tour connects that shift with the global hits that came before it.",
    facts: [
      { label: "KOREA", value: "Returning after 3 years" },
      { label: "GUEST", value: "Don Toliver" },
      { label: "AGE", value: "19+" },
      { label: "FORMAT", value: "Stadium world tour" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2015",
        title: "White Iverson",
        description:
          "His debut single quickly introduced a relaxed vocal delivery over hip-hop production.",
      },
      {
        marker: "2016",
        title: "Stoney",
        description:
          "The first album established his direction by mixing the emotional languages of hip-hop, rock and pop.",
      },
      {
        marker: "2018–2019",
        title: "beerbongs & bentleys / Hollywood's Bleeding",
        description:
          "rockstar, Sunflower and Circles placed him at the center of global pop.",
      },
      {
        marker: "2024",
        title: "F-1 Trillion",
        description:
          "Collaborations with country musicians expanded both his songwriting vocabulary and live show.",
      },
      {
        marker: "2026",
        title: "Return to Korea",
        description:
          "Three years after meeting around 30,000 fans at his first Korean show, he returns at stadium scale.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2015",
        title: "White Iverson",
        meta: "Stoney",
        description:
          "The debut that first made his hazy melody and the boundary between singing and rap widely recognizable.",
      },
      {
        label: "TRACK / 2018",
        title: "Sunflower",
        meta: "with Swae Lee",
        description:
          "A clear, weightless melody made this collaboration a cross-generational pop favorite.",
      },
      {
        label: "TRACK / 2019",
        title: "Circles",
        meta: "Hollywood's Bleeding",
        description:
          "A soft guitar-led pop-rock sound shows the breadth of Post Malone's musical range.",
      },
    ],
    gallery: [
      {
        src: "/editorial/post-malone/f1-trillion.jpg",
        alt: "Album image showing a pickup truck submerged vertically in a lake",
        caption: "F-1 Trillion, 2024",
        credit: "Image: Post Malone official",
        sourceUrl: "https://www.postmalone.com/",
      },
    ],
    locationNote:
      "Goyang Stadium is about a four-minute walk from Exit 3 at Daehwa Station on Line 3. The station and exits may be heavily crowded on the day of the concert.",
    notes: [
      {
        label: "KOREA RETURN",
        title: "Three years after his first Korean show",
        description:
          "After performing for around 30,000 people in 2023, he returns with a stadium-scale production.",
      },
      {
        label: "SPECIAL GUEST",
        title: "Don Toliver joins the tour",
        description:
          "Don Toliver appears as special guest. Check official notices for the final running order.",
      },
      {
        label: "AGE LIMIT",
        title: "Admission for ages 19 and over",
        description:
          "Identity and age checks may be required at entry. Review the ticket seller's accepted identification rules.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://nol.yanolja.com/ticket/products/26004944",
      },
      {
        label: "POST MALONE OFFICIAL",
        url: "https://www.postmalone.com/",
      },
      {
        label: "NOL WORLD GUIDE",
        url: "https://world.nol.com/en/content/festas/019d3ceb-1b8a-7935-a619-d60f6618d1dc",
      },
    ],
  },
  "javier-sola-one-year": {
    typeLabel: "ARTIST PROFILE",
    heading: "A painter who starts with photographs and redraws silence and mood.",
    introduction:
      "Spanish painter Xevi Solà combines existing images such as fashion editorials, mugshots and film stills into new figures and situations. Rather than exact likeness, he focuses on the psychological tension created by small gestures, expressions and empty backgrounds.",
    facts: [
      { label: "BORN", value: "1969 · Spain" },
      { label: "BASED", value: "Girona" },
      { label: "EDUCATION", value: "University of Barcelona · 2007" },
      { label: "MEDIUM", value: "Oil · Acrylic on canvas" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "1969",
        title: "Born in Santa Coloma de Farners",
        description:
          "Born in Catalonia, Spain, Solà now lives and works in Girona.",
      },
      {
        marker: "2007",
        title: "Graduated from the University of Barcelona",
        description:
          "His fine art studies established the foundation for exploring representation and the psychology of figures.",
      },
      {
        marker: "2010",
        title: "Biennale d'Art of Girona",
        description:
          "Showing at the Girona biennale expanded the reach of his exhibition practice.",
      },
      {
        marker: "2014",
        title: "Young Art Award",
        description:
          "He received the Young Art Award at Taipei Contemporary Art Fair.",
      },
      {
        marker: "2026",
        title: "One Year — Perfect Days",
        description:
          "The Seoul exhibition presents time and emotion accumulated in everyday scenes and figures.",
      },
    ],
    highlightsLabel: "SELECTED WORKS",
    highlights: [
      {
        label: "WORK / 2024",
        title: "Desert",
        meta: "Acrylic on canvas · 180 × 220 cm",
        description:
          "Figures around a pool and an open setting are rebuilt in unfamiliar colors, giving an ordinary scene an uneasy narrative.",
      },
      {
        label: "WORK / 2024",
        title: "Behind the Curtains",
        meta: "Acrylic on canvas · 130 × 162 cm",
        description:
          "A red floor and ambiguous relationships between figures leave the tension of a moment just before or after an event.",
      },
      {
        label: "WORK / 2025",
        title: "Bro",
        meta: "Acrylic on canvas · 116 × 89 cm",
        description:
          "A realistic figure and an unexpected animal image create intimacy and estrangement at the same time.",
      },
    ],
    gallery: [
      {
        src: "/editorial/xevi-sola/studio.jpg",
        alt: "Xevi Solà seated in his Girona studio",
        caption: "Xevi Solà in his studio, Girona, 2025",
        credit: "© Enrique Palacio / Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
      {
        src: "/editorial/xevi-sola/desert.jpg",
        alt: "A Xevi Solà painting of figures around a swimming pool",
        caption: "Desert, 2024",
        credit: "Image: Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
      {
        src: "/editorial/xevi-sola/behind-curtain.jpg",
        alt: "A Xevi Solà painting of several figures in a red space",
        caption: "Behind the Curtains, 2024",
        credit: "Image: Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
      {
        src: "/editorial/xevi-sola/bro.jpg",
        alt: "A Xevi Solà painting of a person and a baboon",
        caption: "Bro, 2025",
        credit: "Image: Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
    ],
    locationNote:
      "The exhibition is held at the Seoul Arts Center Calligraphy Art Museum. Last entry is at 18:00, and the museum is closed on Mondays.",
    notes: [
      {
        label: "EARLY BIRD",
        title: "KRW 9,000 through August 30",
        description:
          "This is the early-bird price listed on the official ticket page. General admission afterward is KRW 15,000.",
      },
      {
        label: "VIEWING POINT",
        title: "Look at gestures instead of expressions",
        description:
          "Connect the direction of each gaze, the position of hands, the distance between people and the empty background to imagine the scene's story.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://nol.yanolja.com/ticket/products/26008092",
      },
      {
        label: "OPERA GALLERY ARTIST PROFILE",
        url: "https://www.operagallery.com/artist/xevi-sola",
      },
    ],
  },
  "dialogue-in-the-dark-bukchon": {
    typeLabel: "EXPERIENCE PROFILE",
    heading: "One hundred minutes without sight, learning to trust other senses and other people.",
    introduction:
      "Dialogue in the Dark is an experience through a completely lightless environment led by a professional guide. Instead of looking at exhibits, visitors rediscover everyday spaces through sound, touch, smell, distance and conversation.",
    facts: [
      { label: "DURATION", value: "100 minutes" },
      { label: "GROUP", value: "Up to 8 per session" },
      { label: "INTERVAL", value: "Every 15 minutes" },
      { label: "CONDITION", value: "Complete darkness" },
    ],
    timelineLabel: "EXPERIENCE FLOW",
    timeline: [
      {
        marker: "BEFORE",
        title: "Arrive 15 minutes early",
        description:
          "Arrive before the start for orientation and storing belongings. Late entry is difficult once the session begins.",
      },
      {
        marker: "100 MIN",
        title: "Move with a Roadmaster",
        description:
          "A team of up to eight follows the voice of a professional guide through a sequence of everyday environments.",
      },
      {
        marker: "AFTER",
        title: "Reflect on sense and conversation",
        description:
          "Back in the light, consider how you perceived space and other people without vision.",
      },
    ],
    highlightsLabel: "WHAT CHANGES",
    highlights: [
      {
        label: "01 / SOUND",
        title: "The distance of sound",
        description:
          "Voices, footsteps and reverberation become clues for direction and the size of a space.",
      },
      {
        label: "02 / TOUCH",
        title: "Information through touch",
        description:
          "Materials, temperature and slopes encountered by hand and foot replace sight as a map.",
      },
      {
        label: "03 / TRUST",
        title: "Guide and companions",
        description:
          "Listening and checking one another's position matters more than moving quickly.",
      },
    ],
    locationNote:
      "The dedicated venue is at 71 Bukchon-ro. Because punctual entry is essential, prioritize your session arrival time over nearby sightseeing plans.",
    notes: [
      {
        label: "ARRIVAL",
        title: "Arrive 15 minutes before the start",
        description:
          "Entry is not possible after the experience begins. Allow for traffic and walking time in Bukchon.",
      },
      {
        label: "RESTRICTION",
        title: "No photography, recording or illuminated devices",
        description:
          "Phones and light-emitting devices must be stored as instructed to preserve total darkness.",
      },
      {
        label: "HEALTH NOTE",
        title: "Consider the enclosed darkness in advance",
        description:
          "Check the official participation conditions first if you have claustrophobia, anxiety about darkness or mobility-support needs.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://nol.yanolja.com/ticket/products/26002802",
      },
    ],
  },
  "big-naughty-icn-ntg": {
    typeLabel: "ARTIST PROFILE",
    heading: "Between rap and melody, a musician shaping romance in his own language.",
    introduction:
      "BIG Naughty is a singer-songwriter who places R&B and pop melody and everyday emotion over hip-hop rhythm. ICN > NTG expands airport and boarding imagery into the full narrative of a solo concert at Jangchung Arena.",
    facts: [
      { label: "SHOW", value: "Solo concert" },
      { label: "DURATION", value: "180 minutes" },
      { label: "AGE", value: "Ages 8+" },
      { label: "TICKET", value: "Mobile ticket" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2019",
        title: "Show Me the Money 8",
        description:
          "His distinctive rap and melodic instinct first drew broad public attention.",
      },
      {
        marker: "2021",
        title: "Bucket List",
        description:
          "The first full-length album showed the range of his writing and collaborations across hip-hop, R&B and pop.",
      },
      {
        marker: "2022",
        title: "Nangman",
        description:
          "An album centered on love and youth made BIG Naughty's particular lyricism more distinct.",
      },
      {
        marker: "2026",
        title: "ICN > NTG",
        description:
          "A three-hour solo show transforms Jangchung Arena into a departure terminal.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK",
        title: "Beyond Love",
        meta: "feat. Dynamic Duo",
        description:
          "A narrative anchored in a specific place and time gains another dimension through the veteran duo.",
      },
      {
        label: "TRACK",
        title: "Vancouver",
        description:
          "A signature track connecting the name of a destination with memories of a relationship through an expressive melody.",
      },
      {
        label: "TRACK",
        title: "Lovey Dovey",
        meta: "Solo Ver.",
        description:
          "A light, approachable chorus brings his vocal tone and pop instinct clearly to the surface.",
      },
    ],
    gallery: [
      {
        src: "/editorial/big-naughty/profile.jpg",
        alt: "BIG Naughty looking at the camera in a dimly lit space",
        caption: "BIG Naughty",
        credit: "Image: H1GHR MUSIC",
        sourceUrl: "https://en.h1ghrmusic.com/bignaughty",
      },
      {
        src: "/editorial/big-naughty/portrait.jpg",
        alt: "Official portrait of BIG Naughty in black clothing",
        caption: "BIG Naughty official profile",
        credit: "Image: H1GHR MUSIC",
        sourceUrl: "https://en.h1ghrmusic.com/bignaughty",
      },
    ],
    locationNote:
      "The 180-minute concert begins at 17:00 at Jangchung Arena. Standing and reserved seats may use different routes, so check the gate information on your mobile ticket.",
    notes: [
      {
        label: "TICKET OPEN",
        title: "June 15, 2026 at 20:00",
        description:
          "This is the currently announced general sale time. Check Melon Ticket for any schedule changes.",
      },
      {
        label: "MOBILE ONLY",
        title: "Mobile-ticket operation",
        description:
          "Prepare your phone battery, login status and any information required for identity checks before arriving.",
      },
      {
        label: "CONCEPT",
        title: "Three hours built around airports and boarding",
        description:
          "Watch how the journey suggested by the poster and title connects to the staging and set list.",
      },
    ],
    sources: [
      {
        label: "MELON TICKET",
        url: "https://ticket.melon.com/performance/index.htm?prodId=213406",
      },
      {
        label: "H1GHR MUSIC ARTIST PROFILE",
        url: "https://en.h1ghrmusic.com/bignaughty",
      },
    ],
  },
};
