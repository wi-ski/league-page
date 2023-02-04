
export async function load({ url, fetch }) {
    const currentTeam = url?.searchParams?.get('team') || "CAB"
    const teamsToGoogleSheetTabGids = {
        CAB: "0",
        DMM: "894279419",
        DNF: "1391419696",
        JWW: "909512076",
        KED: "1256324824",
        MTT: "1758890571",
        NUT: "222860920",
        PTS: "222860920",
        RAF: "274439738",
        TIU: "839645106",
        TMW: "1354914927",
        UGG: "430383007",
    }

    const currentGIDForGoogleSheetUrl = teamsToGoogleSheetTabGids[currentTeam]
    const googleIframeSrclUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQNsqqOjk87DpQZ6yzTD_eT8rcgPbkL72VHGpmtsVJcQ7x4yK3ioA18JanSLo15LY5i1ps24rd8hdRC/pubhtml?widget=true&amp;headers=false#430383007#gid=${currentGIDForGoogleSheetUrl}`
    const props = {
        currentTeam,
        teamsToGoogleSheetTabGids,
        currentGIDForGoogleSheetUrl,
        googleIframeSrclUrl
    }

    return props

}
