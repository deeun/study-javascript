const tab_summary = document.getElementById("tab-summaries");
const tab_topcast = document.getElementById("tab-topcast");
const tab_trailer = document.getElementById("tab-trailer");

function showSummary() {
  document.getElementById("summaries").style.display = "block";
  document.getElementById("top-cast").style.display = "none";
  document.getElementById("trailer").style.display = "none";
  tab_summary.className = "tabs__tab__selected";
  tab_topcast.className = "tabs__tab";
  tab_trailer.className = "tabs__tab";
}

function showCastInfo() {
  document.getElementById("summaries").style.display = "none";
  document.getElementById("top-cast").style.display = "block";
  document.getElementById("trailer").style.display = "none";
  tab_summary.className = "tabs__tab";
  tab_topcast.className = "tabs__tab__selected";
  tab_trailer.className = "tabs__tab";
}

function showTrailer() {
  document.getElementById("summaries").style.display = "none";
  document.getElementById("top-cast").style.display = "none";
  document.getElementById("trailer").style.display = "block";
  tab_summary.className = "tabs__tab";
  tab_topcast.className = "tabs__tab";
  tab_trailer.className = "tabs__tab__selected";
}
