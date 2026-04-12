export const runtime = "nodejs";

function clean(value: unknown): string {
  if (value === null || value === undefined || value === "") return "N/A";
  return String(value);
}

// escape HTML so Telegram doesn't break
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = `
<b>🎓 CLASS OF REFORMERS Yearbook</b>
<i>Class of '026 </i>

<b>👤 FULL NAME:</b> ${escapeHtml(clean(data.fullName))}
<b>📛 NICKNAME(S):</b> ${escapeHtml(clean(data.nicknames))}
<b>🎂 BIRTHDAY:</b> ${escapeHtml(clean(data.birthday))}
<b>📱 PHONE:</b> ${escapeHtml(clean(data.phoneNumbers))}

<b>🏠 STATE OF ORIGIN:</b> ${escapeHtml(clean(data.stateOfOrigin))}
<b>🏡 ADDRESS:</b> ${escapeHtml(clean(data.residentialAddress))}

<b>⛪ HOME DIOCESE:</b> ${escapeHtml(clean(data.homeDiocese))}
<b>⛪ ENTRY DIOCESE:</b> ${escapeHtml(clean(data.entryDiocese))}

<b>🙏 HOBBIES:</b> ${escapeHtml(clean(data.hobbies))}
<b>💍 MARITAL STATUS:</b> ${escapeHtml(clean(data.maritalStatus))}

<b>🎓 TUTORIAL GROUP:</b> ${escapeHtml(clean(data.tutorialGroup))}
<b>📌 POST HELD:</b> ${escapeHtml(clean(data.postHeldInCollege))}

<b>📚 FAVORITE COURSES:</b> ${escapeHtml(clean(data.favoriteCourses))}

<b>📖 BIBLE VERSE:</b>
${escapeHtml(clean(data.favoriteBibleVerse))}

<b>📖 BIBLE STORY:</b>
${escapeHtml(clean(data.favoriteBibleCharacterOrStory))}

<b>💬 PERSONAL QUOTE:</b>
${escapeHtml(clean(data.personalQuote))}

<b>🧾 TESTIMONY:</b>
${escapeHtml(clean(data.testimony))}

<b>🔥 CATCH PHRASE:</b>
${escapeHtml(clean(data.catchPhrases))}

<b>📅 MEMORABLE DAY:</b>
${escapeHtml(clean(data.mostMemorableDay))}

<b>🍽 FAVORITE MEAL:</b> ${escapeHtml(clean(data.favoriteMeal))}
<b>🎉 FAVORITE EVENT:</b> ${escapeHtml(clean(data.favoriteEvent))}

<b>👨‍🏫 MOST ADMIRED LECTURER:</b> ${escapeHtml(clean(data.mostAdmiredLecturer))}

<b>👬 BEST FRIENDS:</b>
${escapeHtml(clean(data.bestFriendsInCollege))}

<b>👥 FAVORITE CLASSMATE:</b> ${escapeHtml(clean(data.favoriteClassmate))}

<b>⬆️ FAVORITE SENIORS:</b>
${escapeHtml(clean(data.favoriteSeniorStudents))}

<b>⬇️ FAVORITE JUNIORS:</b>
${escapeHtml(clean(data.favoriteJuniorStudents))}

<b>💔 WHAT YOU WILL MISS:</b>
${escapeHtml(clean(data.whatYouWillMiss))}

<b>🗣 WORD TO JUNIORS:</b>
${escapeHtml(clean(data.wordForJuniorColleagues))}
`;

    // Telegram limit safety
    const safeMessage =
      message.length > 3900 ? message.slice(0, 3900) + "..." : message;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: safeMessage,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    const result = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error("Telegram API Error:", result);

      return new Response(
        JSON.stringify({
          ok: false,
          error: "Telegram failed",
          details: result,
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Submission sent successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);

    return new Response(
      JSON.stringify({
        ok: false,
        error: "Internal server error",
      }),
      { status: 500 }
    );
  }
}