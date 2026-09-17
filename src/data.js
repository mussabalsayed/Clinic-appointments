export const doctors = [
  {
    id: 1,
    name: "د. أحمد السعدي",
    specialty: "طب القلب",
    experience: "15 سنة خبرة",
    rating: 4.9,
    reviews: 128,
    location: "مستشفى تشرين ، دمشق",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=85",
    color: "#e9f5fa",
    bio: "استشاري أمراض القلب والشرايين، متخصص في الوقاية والتشخيص المبكر وعلاج ارتفاع ضغط الدم.",
  },
  {
    id: 2,
    name: "د. سارة منصور",
    specialty: "طب الأطفال",
    experience: "11 سنة خبرة",
    rating: 4.8,
    reviews: 96,
    location: "مركز اميسا الطبي، حمص",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=85",
    color: "#f5edf8",
    bio: "طبيبة أطفال تهتم بصحة طفلك ونموه، وتقدم متابعة شاملة وبيئة مريحة للصغار.",
    arr: [9, 10, 2],
  },
  {
    id: 3,
    name: "د. خالد الحربي",
    specialty: "طب العيون",
    experience: "13 سنة خبرة",
    rating: 4.9,
    reviews: 114,
    location: "مشفى الأمين ,حمص",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=85",
    color: "#eaf6f1",
    bio: "استشاري طب وجراحة العيون، يقدم أحدث حلول تصحيح النظر وعلاج أمراض الشبكية.",
    times: ["09:00 م", "10:00 ص", "10:30 ص", "11:30 م"],
  },
  {
    id: 4,
    name: "د. نورة القحطاني",
    specialty: "الجلدية والتجميل",
    experience: "9 سنوات خبرة",
    rating: 4.7,
    reviews: 87,
    location: " مسثشفى الكندي  ,حمص",
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=500&q=85",
    color: "#fff3eb",
    bio: "متخصصة في الأمراض الجلدية والعلاجات التجميلية غير الجراحية والعناية بالبشرة.",
  },
  {
    id: 5,
    name: "د. يوسف العتيبي",
    specialty: "طب الأسنان",
    experience: "12 سنة خبرة",
    rating: 4.8,
    reviews: 103,
    location: "عيادة ابتسامة ,حمص",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85",
    color: "#edf3fb",
    bio: "طبيب أسنان عام وتجميل، يحرص على تقديم تجربة علاجية مريحة ونتائج تدوم.",
  },
  {
    id: 6,
    name: "د. ريم الغامدي",
    specialty: "النساء والولادة",
    experience: "14 سنة خبرة",
    rating: 4.9,
    reviews: 141,
    location: "مستشفى الرازي، حمص",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=85",
    color: "#f9eef5",
    bio: "استشارية نساء وولادة، متخصصة في متابعة الحمل والولادة الآمنة وصحة المرأة.",
  },
  {
    id: 7,
    name: "د: محمد السيد",
    specialty: "طب القلب",
    experience: "25 سنة خبرة",
    rating: 4.9,
    reviews: 128,
    location: "العيادة القلبية :الحولة -تلدو ,مشفى الوطني: حمص",
    image:
      "https://www.google.com/imgres?q=%D8%B5%D9%88%D8%B1%20%D9%84%D8%B7%D8%A8%D9%8A%D8%A8%20%D9%82%D9%84%D8%A8&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20240325%2Foriginal%2Fpngtree-the-smile-cardiologist-png-image_14679666.png&imgrefurl=https%3A%2F%2Far.pngtree.com%2Ffreepng%2Fthe-smile-cardiologist_14679666.html&docid=BfhBxv4bsFsLfM&tbnid=35vuTbYDQOnGPM&vet=12ahUKEwj5i8njsN6WAxW5hv0HHdv6N98QnPAOegQIPRAA..i&w=2500&h=2500&hcb=2&ved=2ahUKEwj5i8njsN6WAxW5hv0HHdv6N98QnPAOegQIPRAA",
    color: "#e9f5fa",
    bio: "استشاري أمراض القلب والشرايين، متخصص في الوقاية والتشخيص المبكر وعلاج ارتفاع ضغط الدم.",
    times: ["08:30 ص", "11:30 ص", "01:00 م", "02:30 م"],
  },
];
export const specialties = [
  "الكل",
  ...new Set(doctors.map((doctor) => doctor.specialty)),
];

// export const specialties = [
//   "الكل",
//   ...doctors.map((doctor) => doctor.specialty),
// ];
