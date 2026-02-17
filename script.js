/* ══════════════════════════════════════════════════════════════
   AFFIRMATIONS
   ══════════════════════════════════════════════════════════════ */

   const affirmations = [
    "The way you navigate life with such grace and courage is remarkable. I see you, all of you, and I'm in awe.",
    "Your vulnerability is not a weakness — it's one of the most beautiful things about you.",
    "You deserve all the gentleness you give to others. Please, be soft with yourself.",
    "The strength it takes to keep going, even when it's hard — I see it, and I'm so proud of you.",
    "Your emotions are valid. Your struggles are real. And you're handling them with more grace than you realize.",
    "I love you on your best days and your hardest days, and every day in between. Unconditionally.",
    "You don't have to have it all figured out. It's okay to be uncertain, to not know. I'm here regardless.",
    "The way you feel things so deeply — that's not something to fix. That's part of what makes you extraordinary.",
    "You're allowed to rest. You're allowed to not be productive. Your worth isn't tied to what you accomplish.",
    "I'm not going anywhere. Not when it's hard, not when you're struggling. I'm staying.",
    "Your presence alone is enough. You don't have to perform, achieve, or prove anything to be worthy of love.",
    "The care you show for others comes so naturally to you. Remember to extend that same compassion to yourself."
];

let affIdx = 0;

function newAffirmation() {
    const el = document.getElementById('affirmation');
    affIdx = (affIdx + 1) % affirmations.length;
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        el.textContent = `"${affirmations[affIdx]}"`;
        el.style.transition = 'all 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 300);
}

/* ══════════════════════════════════════════════════════════════
   THOUGHT CAROUSEL
   ══════════════════════════════════════════════════════════════ */

let currentThought = 0;
const thoughts = document.querySelectorAll('.thought');

function changeThought(index) {
    thoughts.forEach(t => t.classList.remove('active'));
    thoughts[index].classList.add('active');
    
    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
    
    currentThought = index;
}

// Auto-rotate thoughts every 6 seconds
setInterval(() => {
    currentThought = (currentThought + 1) % thoughts.length;
    changeThought(currentThought);
}, 6000);

/* ══════════════════════════════════════════════════════════════
   MEMORY MODALS
   ══════════════════════════════════════════════════════════════ */

const memoryContent = {
    quiet: {
        title: "The Quiet Intimacy",
        body: `<p>There's something profound in the way we can sit together in silence — we had lately visited purana qila, nehru park and all, kitni shaanti milti aise baithke. Just being together, existing in the same moment.</p>
               <p>Those are the times I feel closest to you. When your hand finds mine without thinking while walking across the streets of north campus after having chai at the sudama tee stall jo pin th hmari pinterest pe, each of us intertwining the hands of another. That kind of comfort — it's ours.</p>
               <p>I cherish those quiet moments more than you know.</p>`
    },
    late: {
        title: "Late Night Conversations",
        body: `<p>Some of my favorite memories with you are those nights when time seems to stop. Whenever we talk in late nights, talking about our dreams, our fears, our past, our future.</p>
               <p>The way you open up to me in those vulnerable hours — it's a gift I never take for granted. You trust me with the parts of yourself you rarely show the world, and I hold that trust carefully.</p>
               <p>Those conversations have shaped us, deepened us. They're where I've come to know the real you from the starting of banasthali and till now, beneath all the layers — and I love what I've found there.</p>`
    },
    laugh: {
        title: "Your Laugh",
        body: `<p>Your laugh is my favorite sound in the world. The genuine one — not the polite chuckle, but the real, unguarded laugh that takes over your whole body in public without giving a damn.</p>
               <p>When I make you laugh like that, unknowingly, randomly, everything else fades. The stress, the worries, the weight of the day — none of it matters in that moment. It's just you and me, and your genuine laughter. It always soothes me.</p>
               <p>I'll keep trying to make you laugh like that for the rest of my life.</p>`
    },
    first: {
        title: "How We Began",
        body: `<p>I remember our magical dates — are not these dates so magical: 6, then 16, and again after two months it was 16. The pattern literally surprised me, MOT.</p>
               <p>I remember the exact moment I realized that everything was going to change — when we travelled together to Jhansi for the very first time. It was the most heartmelting thing. I remember the rate of my heartbeat. It was the best journey of my whole life, although I wish I could have it again with you.</p>
               <p>It's you who taught me LOVE after my mother. You are my love — the only love of my life. I feel you in my nerves, dear.</p>
               <p>That moment marked a before and after in my life. And I'd choose you again in every life, every single time.</p>`
    }
};

function showMemoryModal(type) {
    document.getElementById('modalTitle').textContent = memoryContent[type].title;
    document.getElementById('modalBody').innerHTML = memoryContent[type].body;
    document.getElementById('modal').classList.add('show');
}

/* ══════════════════════════════════════════════════════════════
   HUG COMFORT MESSAGE
   ══════════════════════════════════════════════════════════════ */

function sendComfort() {
    document.getElementById('modalTitle').textContent = "I'm Here";
    document.getElementById('modalBody').innerHTML = `
        <p>I wish I could reach through this screen and hold you right now. Since I can't, imagine my arms around you, holding you close, telling you it's going to be okay.</p>
        <p>Take a deep breath. You're safe. You're loved. And this moment, as difficult as it is, will pass.</p>
        <p>I'm not going anywhere. When you're ready, I'll be here. When you need space, I'll give it to you. When you need someone to lean on, I'll be your strength.</p>
        <p>You don't have to face anything alone. Not today, not ever.</p>
        <p style="margin-top:40px; font-style:italic; color:var(--soft-rose);">Close your eyes, feel my presence with you, and know that you are deeply, completely loved.</p>
    `;
    document.getElementById('modal').classList.add('show');
}

/* ══════════════════════════════════════════════════════════════
   VOICE NOTE (ECHOES OF US)
   ══════════════════════════════════════════════════════════════ */

let audioFile = localStorage.getItem('voiceNote') || null;

function playVoiceNote() {
    document.getElementById('modalTitle').textContent = "Echoes of Us";
    
    if (audioFile) {
        // Voice note already uploaded - show poetic display with audio
        document.getElementById('modalBody').innerHTML = `
            <div class="heart-container">
                <div class="floating-heart">💕</div>
                <div class="floating-heart">💖</div>
                <div class="floating-heart">💕</div>
                <div class="floating-heart">💖</div>
                <div class="center-heart">❤️</div>
            </div>
            <p class="poetic-text">Close your eyes.<br>This is me, sitting with you.</p>
            <div class="audio-container">
                <audio class="audio-player" controls autoplay>
                    <source src="${audioFile}" type="audio/mpeg">
                    <source src="${audioFile}" type="audio/wav">
                    <source src="${audioFile}" type="audio/ogg">
                    <source src="${audioFile}" type="audio/m4a">
                </audio>
            </div>
            <p class="voice-subtitle">No matter how far or how quiet things feel,<br>my voice will always know where to find you.</p>
        `;
    } else {
        // No voice note uploaded yet - show upload interface
        document.getElementById('modalBody').innerHTML = `
            <p style="font-family:'Cormorant Garamond',serif; font-size:1.2em; font-style:italic; color:var(--warm-cream); margin-bottom:25px;">Upload your voice note once, and it will always be here for her.</p>
            <div class="file-upload-container">
                <label for="audioUpload" class="file-upload-label">Choose Voice Note</label>
                <input type="file" id="audioUpload" class="file-upload-input" accept="audio/*" onchange="handleAudioUpload(event)">
                <p style="margin-top:15px; font-size:0.9em; color:var(--muted-mauve);">Supports MP3, WAV, M4A, OGG</p>
            </div>
        `;
    }
    
    document.getElementById('modal').classList.add('show');
}

function handleAudioUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = e => {
        audioFile = e.target.result;
        localStorage.setItem('voiceNote', audioFile);
        playVoiceNote(); // Refresh modal with audio player
    };
    reader.readAsDataURL(file);
}

/* ══════════════════════════════════════════════════════════════
   LETTER TO HIM
   ══════════════════════════════════════════════════════════════ */

let savedLetters = JSON.parse(localStorage.getItem('lettersToHim') || '[]');

// Render saved letters on page load
renderSavedLetters();

function saveLetter() {
    const text = document.getElementById('letterTextarea').value.trim();
    if (!text) return;

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });

    savedLetters.unshift({ text, date: dateStr });
    localStorage.setItem('lettersToHim', JSON.stringify(savedLetters));

    // Clear textarea
    document.getElementById('letterTextarea').value = '';
    
    // Show confirmation
    const conf = document.getElementById('saveConfirmation');
    conf.classList.add('visible');
    setTimeout(() => conf.classList.remove('visible'), 3000);

    // Refresh saved letters list
    renderSavedLetters();
}

function clearLetter() {
    document.getElementById('letterTextarea').value = '';
}

function deleteLetter(index) {
    savedLetters.splice(index, 1);
    localStorage.setItem('lettersToHim', JSON.stringify(savedLetters));
    renderSavedLetters();
}

function renderSavedLetters() {
    const container = document.getElementById('savedLettersContainer');
    const list = document.getElementById('savedLettersList');

    if (savedLetters.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    list.innerHTML = savedLetters.map((letter, i) => `
        <div class="saved-letter-item">
            <button class="delete-letter-btn" onclick="deleteLetter(${i})" title="Delete">×</button>
            <div class="saved-letter-date">${letter.date}</div>
            <div class="saved-letter-preview">${letter.text}</div>
        </div>
    `).join('');
}

/* ══════════════════════════════════════════════════════════════
   MODAL CONTROLS
   ══════════════════════════════════════════════════════════════ */

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Close modal when clicking outside of it
document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});