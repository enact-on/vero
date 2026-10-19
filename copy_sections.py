import re

with open('src/pages/home-v2.astro', 'r', encoding='utf-8') as f:
    home_v2 = f.read()

def extract_section(start_marker, end_marker=None):
    start = home_v2.find(start_marker)
    if start == -1:
        print(f"Could not find {start_marker}")
        return ""
    if end_marker:
        end = home_v2.find(end_marker, start)
    else:
        # find the next </section> after the start
        end = home_v2.find('</section>', start) + len('</section>')
    if end < start:
        print(f"Could not find end for {start_marker}")
        return ""
    return home_v2[start:end]

workflow = extract_section('<!-- 4. WORKFLOW GRID (DARK SECTION) -->')
customer_story = extract_section('<!-- 7. CUSTOMER STORY -->')
how_teams_use = extract_section('<!-- 8. HOW TEAMS USE ORBIT -->')

# extract initTestimonials script
script_start = home_v2.find('function initTestimonials() {')
script_end = home_v2.find('document.addEventListener("DOMContentLoaded", initTestimonials);', script_start) + len('document.addEventListener("DOMContentLoaded", initTestimonials);')
# We need the astro:page-load listener too
astro_page_load = home_v2.find('document.addEventListener("astro:page-load", initTestimonials);', script_start)
if astro_page_load != -1:
    script_end = astro_page_load + len('document.addEventListener("astro:page-load", initTestimonials);')

script_content = home_v2[script_start:script_end]

with open('src/pages/index.astro', 'r', encoding='utf-8') as f:
    index_astro = f.read()

# Insert workflow before Feature 6
index_astro = index_astro.replace('  <!-- Feature 6: AI Agent (Centered Feature) -->', workflow + '\n\n  <!-- Feature 6: AI Agent (Centered Feature) -->')

# Insert customer story before Proven Results
index_astro = index_astro.replace('  <!-- Proven Results -->', customer_story + '\n\n  <!-- Proven Results -->')

# Insert how teams use before FAQ Section
index_astro = index_astro.replace('  <!-- FAQ Section -->', how_teams_use + '\n\n  <!-- FAQ Section -->')

# Append script at the end
script_tag = f"""
<script>
{script_content}
</script>
"""
index_astro = index_astro.replace('</BaseLayout>', script_tag + '\n</BaseLayout>')

with open('src/pages/index.astro', 'w', encoding='utf-8') as f:
    f.write(index_astro)

print("Done")
