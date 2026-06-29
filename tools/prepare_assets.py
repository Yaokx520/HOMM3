from pathlib import Path
from shutil import copy2

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
FIGURES_DIR = ROOT / "asser" / "figures"
MUSIC_DIR = ROOT / "asser" / "music"
HERO_OUT_DIR = ROOT / "docs" / "assets" / "heroes"
MUSIC_OUT_DIR = ROOT / "docs" / "assets" / "music"

HERO_SOURCES = {
    "H018": "hpl018rn.pcx",
    "H023": "hpl023rn.pcx",
    "H027": "hpl027dr.pcx",
    "H035": "hpl035al.pcx",
    "H045": "hpl045wz.pcx",
    "H047": "hpl047wz.pcx",
    "H049": "hpl049hr.pcx",
    "H051": "hpl051hr.pcx",
    "H057": "hpl057dm.pcx",
    "H059": "hpl059dm.pcx",
    "H093": "hpl093wl.pcx",
    "H094": "hpl094wl.pcx",
    "H096": "hpl096br.pcx",
    "H099": "hpl099br.pcx",
    "H102": "hpl102br.pcx",
    "H106": "hpl106bm.pcx",
    "H115": "hpl115bs.pcx",
    "H126": "hpl126wh.pcx",
    "H127": "hpl127wh.pcx",
}

MUSIC_SOURCES = {
    "storm": "TowerTown.mp3",
    "ember": "InfernoTown.mp3",
    "shadow": "necroTown.mp3",
    "war": "StrongHold.mp3",
    "bastion": "FortressTown.mp3",
    "tide": "WATER.MP3",
    "spark": "ElemTown.mp3",
}


def convert_hero_assets() -> None:
    HERO_OUT_DIR.mkdir(parents=True, exist_ok=True)
    for hero_id, filename in HERO_SOURCES.items():
        source = FIGURES_DIR / filename
        target = HERO_OUT_DIR / f"{hero_id}.png"
        with Image.open(source) as image:
            converted = image.convert("RGBA").resize((348, 384), Image.Resampling.NEAREST)
            converted.save(target, format="PNG")


def copy_music_assets() -> None:
    MUSIC_OUT_DIR.mkdir(parents=True, exist_ok=True)
    for key, filename in MUSIC_SOURCES.items():
        source = MUSIC_DIR / filename
        extension = source.suffix.lower()
        target = MUSIC_OUT_DIR / f"{key}{extension}"
        copy2(source, target)


def main() -> None:
    convert_hero_assets()
    copy_music_assets()
    print("Prepared hero portraits and music assets.")


if __name__ == "__main__":
    main()
