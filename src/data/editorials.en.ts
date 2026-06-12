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
        title: "Expansion into global pop",
        description:
          "He brought the dark sensibility of underground R&B to a global audience through sharply defined pop melody.",
      },
      {
        marker: "2019–2020",
        title: "The After Hours era",
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
        url: "https://music.apple.com/kr/album/blinding-lights/1505683705?i=1505683988",
        meta: "After Hours",
        description:
          "Eighties synth-pop texture and an immediate melody meet in his signature global hit.",
      },
      {
        label: "TRACK / 2016",
        title: "Starboy",
        url: "https://music.apple.com/kr/album/starboy-feat-daft-punk/1677005169?i=1677005489",
        meta: "Starboy",
        description:
          "A collaboration with Daft Punk that sharply reconstructs his image and desire as a pop star.",
      },
      {
        label: "TRACK / 2015",
        title: "Can’t Feel My Face",
        url: "https://music.apple.com/kr/album/cant-feel-my-face/1440826239?i=1440826389",
        meta: "Beauty Behind the Madness",
        description:
          "A turning-point single pairing a Michael Jackson-like hook with darker metaphor.",
      },
    ],
    gallery: [
      {
        src: "/editorial/the-weeknd/weeknd.jpg",
        alt: "Portrait of The Weeknd by Brian Ziff",
        caption: "The Weeknd",
        credit: "Image: Brian Ziff · Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:The_Weeknd_Portrait_by_Brian_Ziff.jpg",
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
        title: "Expansion into a second full-length album",
        description:
          "A run of singles, collaborations and audiovisual projects expanded both the second album's world and the band's audience.",
      },
      {
        marker: "2024",
        title: "Korean Music Awards Musician of the Year",
        description:
          "The award recognized the band's simultaneous experimentation and expansion into a wider audience.",
      },
      {
        marker: "2026",
        title: "First Asia tour",
        description:
          "The band's first Asia tour opens with two Seoul shows at KSPO DOME.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2022",
        title: "NO PAIN",
        url: "https://music.apple.com/kr/album/no-pain/1865062012?i=1865062183",
        meta: "Best Modern Rock Song",
        description:
          "A rushing band sound and declarative chorus made this a major turning point for Silica Gel.",
      },
      {
        label: "TRACK / 2023",
        title: "Tik Tak Tok",
        url: "https://music.apple.com/kr/album/tik-tak-tok-feat-so-yoon/1836310183?i=1836310305",
        meta: "feat. So!YoON!",
        description:
          "Sharp guitar riffs cross So!YoON!'s voice, revealing the band's rhythmic precision and range.",
      },
      {
        label: "TRACK / 2021",
        title: "Desert Eagle",
        url: "https://music.apple.com/kr/album/desert-eagle/1703562324?i=1703562329",
        meta: "Best Modern Rock Song",
        description:
          "The track captures the concentrated playing and psychedelic development of the renewed four-piece.",
      },
    ],
    gallery: [
      {
        src: "/editorial/silica-gel/group-2026.jpg",
        alt: "The four members of Silica Gel against a blue sky",
        caption: "Silica Gel, 2026",
        credit: "Image: CAM",
        sourceUrl: "https://v.daum.net/v/20260602164500893",
      },
      {
        src: "/editorial/silica-gel/live-2025.jpg",
        alt: "Silica Gel performing before a large blue stage visual",
        caption: "Syn.THE.Size X, 2025",
        credit: "Image: Silica Gel Official",
        sourceUrl: "https://www.youtube.com/watch?v=KaYT_O0CwLE",
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
  "cortis-put-your-phone-down-incheon": {
    typeLabel: "ARTIST PROFILE",
    heading: "Five creators involved in making the work both onstage and behind it.",
    introduction:
      "CORTIS is a five-member BIGHIT MUSIC group formed by MARTIN, JAMES, JUHOON, SEONGHYEON and KEONHO. Every member contributes to music, choreography or video, placing collective creation above fixed positions. The Incheon shows open their first tour since debut.",
    facts: [
      { label: "MEMBERS", value: "Five · Collective creation" },
      { label: "DEBUT", value: "2025" },
      { label: "TOUR", value: "First headline tour" },
      { label: "AGE", value: "Ages 9+" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2025",
        title: "Debut with BIGHIT MUSIC",
        description:
          "The group introduced a creator-crew model with members contributing directly to music, performance and video.",
      },
      {
        marker: "2025",
        title: "Expansion through a first EP",
        description:
          "Rough guitar, hip-hop production and bright pop hooks revealed the group's broad creative range.",
      },
      {
        marker: "2026",
        title: "Moving onto global stages",
        description:
          "Major international appearances and a second EP expanded the energy of their debut year into a larger performance format.",
      },
      {
        marker: "JUL 2026",
        title: "First tour begins",
        description:
          "Two Incheon shows open a headline tour continuing through North America and Japan.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2025",
        title: "What You Want",
        url: "https://music.apple.com/kr/album/what-you-want/1832031331?i=1832031341",
        meta: "COLOR OUTSIDE THE LINES",
        description:
          "Psychedelic-rock guitar and heavy trap rhythm make the group's genre-mixing approach immediately clear.",
      },
      {
        label: "TRACK / 2026",
        title: "REDRED",
        url: "https://music.apple.com/kr/album/redred/1887671065?i=1887671067",
        meta: "GREENGREEN",
        description:
          "A repetitive hook, rapid energy and direct performance instinct condense the color of their second era.",
      },
      {
        label: "TRACK / 2026",
        title: "TNT",
        url: "https://music.apple.com/kr/album/tnt/1887671065?i=1887671066",
        meta: "GREENGREEN",
        description:
          "The members' production involvement and visual direction move in step with the track's speed.",
      },
    ],
    gallery: [
      {
        src: "/editorial/cortis/greengreen.png",
        alt: "Image for CORTIS second EP GREENGREEN",
        caption: "GREENGREEN, 2026",
        credit: "Image: Apple Music",
        sourceUrl: "https://music.apple.com/kr/artist/cortis/1831651635",
      },
    ],
    locationNote:
      "INSPIRE Arena is a large venue on Yeongjong Island. Check Airport Railroad connections, resort or concert shuttles and the final route home before traveling.",
    notes: [
      {
        label: "TICKET OPEN",
        title: "General sale: June 18, 2026 at 20:00",
        description:
          "The Korean presale begins June 15 and general sale begins June 18. Recheck the official ticket page for schedule changes.",
      },
      {
        label: "ENTRY",
        title: "Mobile ticket · Face Pass",
        description:
          "No physical ticket is issued, and reservation and attendee information may be checked. Open and save your mobile ticket before reaching the venue.",
      },
      {
        label: "ACCESS",
        title: "Plan the route back from Yeongjong",
        description:
          "Saturday and Sunday start at different times. Include shuttle sales and final public-transport departures in your plan.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://tickets.interpark.com/goods/26007886",
      },
      {
        label: "BIGHIT MUSIC TOUR",
        url: "https://ibighit.com/en/cortis/tour/",
      },
      {
        label: "BIGHIT MUSIC PROFILE",
        url: "https://ibighit.com/en/cortis/profile/",
      },
      {
        label: "APPLE MUSIC ARTIST PROFILE",
        url: "https://music.apple.com/kr/artist/cortis/1831651635",
      },
    ],
  },
  "sienna-spiro-my-house-seoul": {
    typeLabel: "ARTIST PROFILE",
    heading: "A voice pushing vintage soul texture into the present.",
    introduction:
      "Sienna Spiro is a London singer-songwriter connecting jazz and soul phrasing with contemporary pop writing. Her songs often grow from restrained piano into dramatic strings and full-bodied vocals. The Seoul stop of My House Tour is her first solo performance in Korea.",
    facts: [
      { label: "KOREA", value: "First Korean performance" },
      { label: "FROM", value: "London · 2005" },
      { label: "FORMAT", value: "My House Tour" },
      { label: "AGE", value: "All ages" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2021",
        title: "Original songs shared online",
        description:
          "Covers and original songs introduced her husky tone and precise vocal phrasing to a growing audience.",
      },
      {
        marker: "2024",
        title: "Official debut and a UK chart entry",
        description:
          "After releasing her first single, the follow-up entered the top 50 of the UK Official Singles Chart.",
      },
      {
        marker: "2025",
        title: "A first EP and global breakthrough",
        description:
          "A restrained debut EP was followed by rapid growth across the UK and US charts.",
      },
      {
        marker: "2026",
        title: "Debut album and world tour",
        description:
          "Ahead of her first studio album, she announced her largest tour across North America, Asia, Australia and Europe.",
      },
      {
        marker: "JAN 2027",
        title: "First solo show in Seoul",
        description:
          "Myunghwa Live Hall hosts her first meeting with a Korean concert audience.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2025",
        title: "Die On This Hill",
        url: "https://music.apple.com/kr/album/die-on-this-hill/1841769601?i=1841769602",
        meta: "UK TOP 10",
        description:
          "Piano and strings steadily expand beneath a textured voice and an explosive final passage.",
      },
      {
        label: "TRACK / 2026",
        title: "The Visitor",
        url: "https://music.apple.com/kr/album/the-visitor/6769552402?i=6769552688",
        meta: "VISITOR",
        description:
          "Precise phrasing and controlled tension point toward the direction of her first studio album.",
      },
      {
        label: "TRACK / 2024",
        title: "MAYBE.",
        url: "https://music.apple.com/kr/album/maybe/1793196922?i=1793197040",
        meta: "SINK NOW, SWIM LATER",
        description:
          "The song offers a close view of her early emotional detail and jazz-vocal influence.",
      },
    ],
    gallery: [
      {
        src: "/editorial/sienna-spiro/profile.jpg",
        alt: "Official portrait of Sienna Spiro in a pink jacket",
        caption: "Sienna Spiro",
        credit: "Image: Sienna Spiro official",
        sourceUrl: "https://www.officialsiennaspiro.com/",
      },
      {
        src: "/editorial/sienna-spiro/apple.png",
        alt: "Official Sienna Spiro artist image from 2026",
        caption: "Sienna Spiro, 2026",
        credit: "Image: Apple Music artist profile",
        sourceUrl:
          "https://music.apple.com/us/artist/sienna-spiro/1745678083",
      },
    ],
    locationNote:
      "Myunghwa Live Hall sits between Yeongdeungpo Market and Singil stations. Standing and reserved seats may use different entry routes, so check the notice for your ticket type.",
    notes: [
      {
        label: "FIRST KOREA SHOW",
        title: "Sienna Spiro's first solo show in Korea",
        description:
          "This is her first meeting with a Korean audience as part of a solo tour rather than a festival or shared bill.",
      },
      {
        label: "TICKET OPEN",
        title: "General sale: June 18, 2026 at 10:00",
        description:
          "Artist presale begins June 16, followed by general sale on June 18, with a four-ticket limit per person.",
      },
      {
        label: "SEATING",
        title: "Standing and reserved seats at one price",
        description:
          "Both categories cost KRW 110,000 and the show is open to all ages. Check the official notice for final entry and seating details.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET OPEN NOTICE",
        url: "https://tickets.interpark.com/contents/notice/detail/14159",
      },
      {
        label: "NOL TICKET",
        url: "https://tickets.interpark.com/goods/26008451",
      },
      {
        label: "SIENNA SPIRO OFFICIAL",
        url: "https://www.officialsiennaspiro.com/",
      },
      {
        label: "APPLE MUSIC ARTIST PROFILE",
        url: "https://music.apple.com/us/artist/sienna-spiro/1745678083",
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
        title: "A breakout debut single",
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
        title: "Expansion across two albums",
        description:
          "A wider range of melody and collaborations, from hip-hop to pop rock, placed him at the center of global pop.",
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
        url: "https://music.apple.com/kr/album/white-iverson/1440888125?i=1440888729",
        meta: "Stoney",
        description:
          "The debut that first made his hazy melody and the boundary between singing and rap widely recognizable.",
      },
      {
        label: "TRACK / 2018",
        title: "Sunflower",
        url: "https://music.apple.com/kr/album/sunflower-spider-man-into-the-spider-verse/1445949265?i=1445949267",
        meta: "with Swae Lee",
        description:
          "A clear, weightless melody made this collaboration a cross-generational pop favorite.",
      },
      {
        label: "TRACK / 2019",
        title: "Circles",
        url: "https://music.apple.com/kr/album/circles/1477880265?i=1477880561",
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
        title: "10:30 in Front of Crispy",
        url: "https://music.apple.com/kr/album/10%EC%8B%9C-%EB%B0%98-%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%94%BC-%EC%95%9E-feat-%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9-%EB%93%80%EC%98%A4/6771244767?i=6771244768",
        meta: "feat. Dynamic Duo",
        description:
          "A narrative anchored in a specific place and time gains another dimension through the veteran duo.",
      },
      {
        label: "TRACK",
        title: "Vancouver",
        url: "https://music.apple.com/kr/album/vancouver/1622167330?i=1622167332",
        description:
          "A signature track connecting the name of a destination with memories of a relationship through an expressive melody.",
      },
      {
        label: "TRACK",
        title: "Lovey Dovey",
        url: "https://music.apple.com/kr/album/lovey-dovey-feat-meenoi/1622167330?i=1622167331",
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
  audeum: {
    typeLabel: "SPACE / EXHIBITION PROFILE",
    heading: "Beyond viewing equipment, a place to experience good sound.",
    introduction:
      "Audeum is an audio museum preserving and researching rare sound-reproduction equipment dating from the nineteenth century onward. Its permanent exhibition Jung Eum: In Search of Sound begins with the hi-fi ideal of faithful reproduction, then asks visitors to form their own answer to the question of what good sound can be.",
    facts: [
      { label: "FORMAT", value: "Audio museum · Listening tour" },
      { label: "EXHIBITION", value: "Jung Eum: In Search of Sound · Permanent" },
      { label: "ARCHITECT", value: "Kengo Kuma" },
      { label: "ENTRY", value: "Free · Advance reservation" },
    ],
    timelineLabel: "COLLECTION CONTEXT",
    timeline: [
      {
        marker: "19C–",
        title: "A history of sound reproduction",
        description:
          "The collection preserves equipment spanning Edison phonographs, early cinema systems and the development of domestic high fidelity.",
      },
      {
        marker: "1920S",
        title: "Large horns for cinemas and public space",
        description:
          "Western Electric's large horn systems delivered powerful, articulate sound during the early period of electrical amplification.",
      },
      {
        marker: "1957",
        title: "JBL Paragon",
        description:
          "A curved acoustic reflector and wooden cabinet expanded the boundary between domestic stereo technology and furniture design.",
      },
      {
        marker: "NOW",
        title: "Jung Eum: In Search of Sound",
        description:
          "The permanent exhibition connects the history and construction of the collection to listening, leaving room for each visitor's own definition of good sound.",
      },
    ],
    highlightsLabel: "COLLECTION NOTES",
    highlights: [
      {
        label: "SYSTEM / WESTERN ELECTRIC",
        title: "Horn Speaker 11A",
        meta: "Straight horn · 555 driver",
        description:
          "One of Western Electric's largest straight horns, designed for the high output and clarity required by early professional sound systems.",
      },
      {
        label: "SYSTEM / LANSING",
        title: "Iconic",
        meta: "Early compact Hi-Fi",
        description:
          "A speaker that moved high-resolution reproduction beyond large cinemas and helped open the path toward domestic high fidelity.",
      },
      {
        label: "SYSTEM / JBL",
        title: "Paragon",
        meta: "Integrated stereo · 1957",
        description:
          "Its curved reflector creates a balanced stereo image across the room, while the cabinet is conceived with the presence of finely made furniture.",
      },
    ],
    gallery: [
      {
        src: "/editorial/audeum/architecture.jpg",
        alt: "Audeum's entrance framed by glass and a vertical metal-pipe facade",
        caption: "Audeum Audio Museum",
        credit: "Image: Audeum",
        sourceUrl: "https://audeum.org/about",
      },
      {
        src: "/editorial/audeum/western-electric-11a.jpg",
        alt: "Western Electric 11A system formed by eight large horns",
        caption: "Western Electric Horn Speaker 11A",
        credit: "Image: Audeum",
        sourceUrl: "https://audeum.org/exhibitions/1",
      },
      {
        src: "/editorial/audeum/jbl-paragon.jpg",
        alt: "JBL Paragon speaker built as a long curved wooden cabinet",
        caption: "JBL Paragon Speaker, 1957",
        credit: "Image: Audeum",
        sourceUrl: "https://audeum.org/exhibitions/1",
      },
    ],
    locationNote:
      "Audeum sits in a residential area overlooking Cheonggye Mountain. It is about two minutes on foot from the Tapseong Village, Seocho Foresta Entrance bus stop and about twenty minutes from Cheonggyesan Station.",
    notes: [
      {
        label: "NEXT RESERVATION",
        title: "Opens June 16, 2026 at 14:00",
        description:
          "Reservations are scheduled to open for June 18, 19, 20, 25, 26 and 27. Cancelled slots are updated on the official booking page.",
      },
      {
        label: "OPENING HOURS",
        title: "Thursday–Saturday, 10:00–17:30",
        description:
          "Last admission is at 17:00 and every visit requires an advance reservation.",
      },
      {
        label: "ENTRY",
        title: "One ticket per person · QR entry",
        description:
          "Entry requires the QR ticket issued after booking. Avoid any paid reservation channel outside Audeum's official website.",
      },
    ],
    sources: [
      {
        label: "AUDEUM",
        url: "https://audeum.org/",
      },
      {
        label: "CURRENT EXHIBITION",
        url: "https://audeum.org/exhibitions/1",
      },
      {
        label: "VISIT / ARCHITECTURE",
        url: "https://audeum.org/about",
      },
      {
        label: "RESERVATION",
        url: "https://audeum.org/booking",
      },
    ],
  },
};
