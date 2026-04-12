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
    <div className="max-w-3xl mx-auto p-6">

      <form onSubmit={handleSubmit} className="grid gap-5">

        {/* BASIC INFO */}
        <input required name="fullName" placeholder="Full Name" onChange={handleChange} value={form.fullName} className="input" />

        <input required name="nicknames" placeholder="Nickname(s)" onChange={handleChange} value={form.nicknames} className="input" />

        <input required type="date" id="birthday" placeholder="Birthday" name="birthday" onChange={handleChange} value={form.birthday} className="input" title="Birthday" />

        <input required name="phoneNumbers" placeholder="Phone Numbers (comma separated) *" onChange={handleChange} value={form.phoneNumbers} className="input" />

        {/* STATE */}
        <input required name="stateOfOrigin" placeholder="State of Origin" onChange={handleChange} value={form.stateOfOrigin} className="input" />

        <input required name="residentialAddress" placeholder="Residential Address" onChange={handleChange} value={form.residentialAddress} className="input" />

        {/* DIOCESE */}
        <input required name="homeDiocese" placeholder="Home Diocese" onChange={handleChange} value={form.homeDiocese} className="input" />

        <input required name="entryDiocese" placeholder="Entry Diocese" onChange={handleChange} value={form.entryDiocese} className="input" />

        {/* SPIRITUAL */}
        <input required name="favoriteBibleVerse" placeholder="Favorite Bible Verse" onChange={handleChange} value={form.favoriteBibleVerse} className="input" />

        <input required name="favoriteBibleCharacterOrStory" placeholder="Bible Character/Story" onChange={handleChange} value={form.favoriteBibleCharacterOrStory} className="input" />

        {/* ACADEMIC */}
        <input required name="tutorialGroup" placeholder="Tutorial Group" onChange={handleChange} value={form.tutorialGroup} className="input" />

        <input name="postHeldInCollege" placeholder="Post Held in College" onChange={handleChange} value={form.postHeldInCollege} className="input" />

        <input required name="favoriteCourses" placeholder="Favorite Courses" onChange={handleChange} value={form.favoriteCourses} className="input" />

        {/* PERSONAL */}
        <input required name="hobbies" placeholder="Hobbie(s)" onChange={handleChange} value={form.hobbies} className="input" />

        <label htmlFor="maritalStatus" className="sr-only">Marital Status</label>
        <select required id="maritalStatus" name="maritalStatus" onChange={handleChange} value={form.maritalStatus} className="input" title="Marital Status">
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>

        {/* EXPRESSIONS */}
        <input required name="personalQuote" placeholder="Personal Quote" onChange={handleChange} value={form.personalQuote} className="input" />

        <textarea required name="testimony" placeholder="Testimony (max 150 words)" onChange={handleChange} value={form.testimony} className="input" />

        <input name="catchPhrases" placeholder="Catch Phrase" onChange={handleChange} value={form.catchPhrases} className="input" />

        <input required name="mostMemorableDay" placeholder="Most Memorable Day" onChange={handleChange} value={form.mostMemorableDay} className="input" />

        <input required name="favoriteMeal" placeholder="Favorite Meal" onChange={handleChange} value={form.favoriteMeal} className="input" />

        <input required name="favoriteEvent" placeholder="Favorite Event" onChange={handleChange} value={form.favoriteEvent} className="input" />

        <input required name="mostAdmiredLecturer" placeholder="Most Admired Lecturer" onChange={handleChange} value={form.mostAdmiredLecturer} className="input" />

        <input required name="bestFriendsInCollege" placeholder="Best Friend(s) in College" onChange={handleChange} value={form.bestFriendsInCollege} className="input" />

        <input required name="favoriteClassmate" placeholder="Favorite Classmate" onChange={handleChange} value={form.favoriteClassmate} className="input" />

        <input required name="favoriteSeniorStudents" placeholder="Favorite Senior(s)" onChange={handleChange} value={form.favoriteSeniorStudents} className="input" />

        <input required name="favoriteJuniorStudents" placeholder="Favorite Junior(s)" onChange={handleChange} value={form.favoriteJuniorStudents} className="input" />

        <input required name="whatYouWillMiss" placeholder="What You Will Miss" onChange={handleChange} value={form.whatYouWillMiss} className="input" />

        <textarea required name="wordForJuniorColleagues" placeholder="Word for Juniors (max 50 words)" onChange={handleChange} value={form.wordForJuniorColleagues} className="input" />

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