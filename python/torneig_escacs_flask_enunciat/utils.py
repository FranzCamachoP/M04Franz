import re

def validar_nom(nom):
    """
    Valida si un nom només conté lletres (majúscules, minúscules) i espais.
    Retorna True si el nom és vàlid, False en cas contrari.
    """
    if re.match(r'^[A-Za-zÀ-ÿ\s]+$', nom):
        return True
    else:
        return False

def normalitzar_nom(nom):
    """
    Elimina espais innecessaris i normalitza el format del nom (capitalitza).
    """
    return " ".join(nom.strip().split()).title()

def llegir_fitxer(fitxer):
    """
    Llegeix un fitxer i retorna el contingut línia per línia en una llista.
    """
    try:
        with open(fitxer, "r", encoding="utf-8") as f:
            return f.readlines()
    except FileNotFoundError:
        print(f"Error: El fitxer '{fitxer}' no existeix.")
        return []

def escriure_fitxer(fitxer, dades):
    """
    Escriu dades en un fitxer. Cada element de la llista serà una línia.
    """
    try:
        with open(fitxer, "w", encoding="utf-8") as f:
            for linia in dades:
                f.write(linia + "\n")
    except Exception as e:
        print(f"Error en escriure el fitxer '{fitxer}': {e}")
