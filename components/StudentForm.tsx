"use client";

import { useState } from "react";

export default function StudentForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    nicknames: "",
    birthday: "",
    phoneNumbers: "",
    stateOfOrigin: "",
    residentialAddress: "",

    homeDiocese: "",
    entryDiocese: "",

    hobbies: "",
    maritalStatus: "single",

    tutorialGroup: "",
    postHeldInCollege: "",

    favoriteCourses: "",
    favoriteBibleVerse: "",
    personalQuote: "",
    testimony: "",

    favoriteBibleCharacterOrStory: "",
    catchPhrases: "",
    mostMemorableDay: "",

    favoriteMeal: "",
    favoriteEvent: "",

    mostAdmiredLecturer: "",
    bestFriendsInCollege: "",

    favoriteClassmate: "",
    favoriteSeniorStudents: "",
    favoriteJuniorStudents: "",

    whatYouWillMiss: "",
    wordForJuniorColleagues: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      phoneNumbers: form.phoneNumbers.split(",").map((n) => n.trim()),
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      alert("Submitted successfully!");

      setForm({
        fullName: "",
        nicknames: "",
        birthday: "",
        phoneNumbers: "",
        stateOfOrigin: "",
        residentialAddress: "",

        homeDiocese: "",
        entryDiocese: "",

        hobbies: "",
        maritalStatus: "single",

        tutorialGroup: "",
        postHeldInCollege: "",

        favoriteCourses: "",
        favoriteBibleVerse: "",
        personalQuote: "",
        testimony: "",

        favoriteBibleCharacterOrStory: "",
        catchPhrases: "",
        mostMemorableDay: "",

        favoriteMeal: "",
        favoriteEvent: "",

        mostAdmiredLecturer: "",
        bestFriendsInCollege: "",

        favoriteClassmate: "",
        favoriteSeniorStudents: "",
        favoriteJuniorStudents: "",

        whatYouWillMiss: "",
        wordForJuniorColleagues: ""
      });
    } else {
      alert("Submission failed!");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6">

      <form onSubmit={handleSubmit} className="grid gap-6">

  {/* FULL NAME */}
  <div>
    <h2 className="font-semibold">Full Name</h2>
    <input required name="fullName" placeholder="Full Name" onChange={handleChange} value={form.fullName} className="input" />
    <p>Your official name as registered in the college</p>
  </div>

  {/* NICKNAME */}
  <div>
    <h2 className="font-semibold">Nickname(s)</h2>
    <input required name="nicknames" placeholder="Nickname(s)" onChange={handleChange} value={form.nicknames} className="input" />
    <p>Names your friends commonly call you</p>
  </div>

  {/* BIRTHDAY */}
  <div>
    <h2 className="font-semibold">Date of Birth</h2>
    <input required type="date" name="birthday" title="Date of Birth" onChange={handleChange} value={form.birthday} className="input" />
    <p>Select your birth date</p>
  </div>

  {/* PHONE */}
  <div>
    <h2 className="font-semibold">Phone Numbers</h2>
    <input required name="phoneNumbers" placeholder="Phone Number(s)" onChange={handleChange} value={form.phoneNumbers} className="input" />
    <p>Enter one or more phone numbers separated by commas</p>
  </div>

  {/* STATE */}
  <div>
    <h2 className="font-semibold">State of Origin</h2>
    <input required name="stateOfOrigin" placeholder="State of Origin" onChange={handleChange} value={form.stateOfOrigin} className="input" />
    <p>Your state of origin</p>
  </div>

  {/* ADDRESS */}
  <div>
    <h2 className="font-semibold">Residential Address</h2>
    <input required name="residentialAddress" placeholder="Residential Address" onChange={handleChange} value={form.residentialAddress} className="input" />
    <p>Your current place of residence</p>
  </div>

  {/* DIOCESE */}
  <div>
    <h2 className="font-semibold">Home Diocese</h2>
    <input required name="homeDiocese" placeholder="Home Diocese" onChange={handleChange} value={form.homeDiocese} className="input" />
    <p>Your original diocese</p>
  </div>

  <div>
    <h2 className="font-semibold">Entry Diocese</h2>
    <input required name="entryDiocese" placeholder="Entry Diocese" onChange={handleChange} value={form.entryDiocese} className="input" />
    <p>The diocese you are getting ordained in.</p>
  </div>

{/* EXTRA EXPRESSIONS */}
<div>
  <h2 className="font-semibold">Catch Phrase</h2>
  <input name="catchPhrases" placeholder="Catch Phrase" onChange={handleChange} value={form.catchPhrases} className="input" />
  <p>A phrase you are known for saying</p>
</div>

<div>
  <h2 className="font-semibold">Favorite Event</h2>
  <input required name="favoriteEvent" placeholder="Favorite Event" onChange={handleChange} value={form.favoriteEvent} className="input" />
  <p>Your most enjoyed event in the college</p>
</div>

{/* RELATIONSHIPS */}
<div>
  <h2 className="font-semibold">Most Admired Lecturer</h2>
  <input required name="mostAdmiredLecturer" placeholder="Most Admired Lecturer" onChange={handleChange} value={form.mostAdmiredLecturer} className="input" />
  <p>The lecturer you respect the most</p>
</div>

<div>
  <h2 className="font-semibold">Best Friend(s) in College</h2>
  <input required name="bestFriendsInCollege" placeholder="Best Friend(s) in College" onChange={handleChange} value={form.bestFriendsInCollege} className="input" />
  <p>Your closest friend(s) during your time in the College</p>
</div>

<div>
  <h2 className="font-semibold">Favorite Classmate</h2>
  <input required name="favoriteClassmate" placeholder="Favorite Classmate" onChange={handleChange} value={form.favoriteClassmate} className="input" />
  <p>Your most cherished classmate</p>
</div>

<div>
  <h2 className="font-semibold">Favorite Senior Student</h2>
  <input required name="favoriteSeniorStudents" placeholder="Favorite Senior" onChange={handleChange} value={form.favoriteSeniorStudents} className="input" />
  <p>Senior student you admire Most</p>
</div>

<div>
  <h2 className="font-semibold">Favorite Junior Students</h2>
  <input required name="favoriteJuniorStudents" placeholder="Favorite Junior(s)" onChange={handleChange} value={form.favoriteJuniorStudents} className="input" />
  <p>Junior students you appreciate</p>
</div>

<div>
  <h2 className="font-semibold">Word for Junior Colleagues</h2>
  <textarea required name="wordForJuniorColleagues" placeholder="Word for Juniors (max 50 words)" onChange={handleChange} value={form.wordForJuniorColleagues} className="input" />
  <p>A short message or advice to those coming after you</p>
</div>

  {/* SPIRITUAL */}
  <div>
    <h2 className="font-semibold">Favorite Bible Verse</h2>
    <input required name="favoriteBibleVerse" placeholder="Favorite Bible Verse" onChange={handleChange} value={form.favoriteBibleVerse} className="input" />
    <p>A Bible verse that inspires you most</p>
  </div>

  <div>
    <h2 className="font-semibold">Favorite Bible Character/Story</h2>
    <input required name="favoriteBibleCharacterOrStory" placeholder="Bible Character/Story" onChange={handleChange} value={form.favoriteBibleCharacterOrStory} className="input" />
    <p>Your most inspiring biblical character or story</p>
  </div>

  {/* ACADEMIC */}
  <div>
    <h2 className="font-semibold">Tutorial Group</h2>
    <input required name="tutorialGroup" placeholder="Tutorial Group" onChange={handleChange} value={form.tutorialGroup} className="input" />
    <p>Your assigned tutorial group</p>
  </div>

  <div>
    <h2 className="font-semibold">Post Held in College</h2>
    <input name="postHeldInCollege" placeholder="Post Held in College" onChange={handleChange} value={form.postHeldInCollege} className="input" />
    <p>Any leadership Position or responsibility you held</p>
  </div>

  <div>
    <h2 className="font-semibold">Favorite Courses</h2>
    <input required name="favoriteCourses" placeholder="Favorite Courses" onChange={handleChange} value={form.favoriteCourses} className="input" />
    <p>Courses you enjoyed the most</p>
  </div>

  {/* PERSONAL */}
  <div>
    <h2 className="font-semibold">Hobbies</h2>
    <input required name="hobbies" placeholder="Hobbies" onChange={handleChange} value={form.hobbies} className="input" />
    <p>Your favorite leisure activities</p>
  </div>

  <div>
    <h2 className="font-semibold">Marital Status</h2>
    <select required name="maritalStatus" title="Marital Status" onChange={handleChange} value={form.maritalStatus} className="input">
      <option value="single">Single</option>
      <option value="married">Married</option>
    </select>
    <p>Your marital status</p>
  </div>

  {/* EXPRESSIONS */}
  <div>
    <h2 className="font-semibold">Personal Quote</h2>
    <input required name="personalQuote" placeholder="Personal Quote" onChange={handleChange} value={form.personalQuote} className="input" />
    <p>A quote that defines you</p>
  </div>

  <div>
    <h2 className="font-semibold">Testimony</h2>
    <textarea required name="testimony" placeholder="Testimony (max 150 words)" onChange={handleChange} value={form.testimony} className="input" />
    <p>Share how the school has impacted your life and helped your Ministry Journey</p>
  </div>

  <div>
    <h2 className="font-semibold">Most Memorable Day</h2>
    <input required name="mostMemorableDay" placeholder="Most Memorable Day" onChange={handleChange} value={form.mostMemorableDay} className="input" />
    <p>The day you will never forget in the college</p>
  </div>

  <div>
    <h2 className="font-semibold">Favorite Meal</h2>
    <input required name="favoriteMeal" placeholder="Favorite Meal" onChange={handleChange} value={form.favoriteMeal} className="input" />
    <p>Your best food in college</p>
  </div>

  <div>
    <h2 className="font-semibold">What You Will Miss</h2>
    <input required name="whatYouWillMiss" placeholder="What You Will Miss" onChange={handleChange} value={form.whatYouWillMiss} className="input" />
    <p>What you will miss most after leaving</p>
  </div>

  {/* SUBMIT */}
  <button
    type="submit"
    disabled={loading}
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
    {loading ? "Submitting..." : "Submit"}
  </button>

</form>
    </div>
  );
}