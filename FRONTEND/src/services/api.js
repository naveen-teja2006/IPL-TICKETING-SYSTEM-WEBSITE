// This Provides The API
let API = "http://localhost:3000/api";
export async function getAllMatches() {
    let response = await fetch(`${API}/matches`);
    const data = response.json();
    return data;
}

export async function getAllMatchesById(id) {
    let response = await fetch(`${API}/matches/${id}`);
    const data = await response.json();
    return data;
}

export async function getAllSeatsById(matchId){
    let response = await fetch(`${API}/matches/${matchId}/seats`);
    const data = await response.json();
    return data;
}

export async function getMyBookings(userId){
    let response = await fetch(`${API}/mybookings/${userId}`);
    const data = response.json();
    return data;
}