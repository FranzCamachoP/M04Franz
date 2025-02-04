import json
import random

# Mòdul per gestionar partides

def generar_partides(participants):
    """
    Genera un calendari de partides on tots els participants juguen entre si.
    Retorna una llista de tuples amb les partides.
    """
    if len(participants) < 2:
        print("Error: Calen almenys 2 participants per generar partides.")
        return []

    partides = []
    for i in range(len(participants)):
        for j in range(i + 1, len(participants)):
            partides.append((participants[i], participants[j]))
    
    random.shuffle(partides)  # Opcional: Mesclar les partides aleatòriament
    return partides

def desar_partides_a_fitxer(partides, fitxer):
    """
    Desa les partides en un fitxer en format JSON.
    """
    try:
        with open(fitxer, "w") as f:
            json.dump(partides, f, indent=4)
        print(f"Partides desades correctament al fitxer '{fitxer}'.")
    except Exception as e:
        print(f"Error en desar les partides: {e}")

def carregar_partides_de_fitxer(fitxer):
    """
    Carrega les partides des d'un fitxer en format JSON.
    Retorna una llista de tuples amb les partides.
    """
    try:
        with open(fitxer, "r") as f:
            partides = json.load(f)
        print(f"Partides carregades correctament des del fitxer '{fitxer}'.")
        return partides
    except FileNotFoundError:
        print(f"Error: El fitxer '{fitxer}' no existeix.")
        return []
    except Exception as e:
        print(f"Error en carregar les partides: {e}")
        return []
