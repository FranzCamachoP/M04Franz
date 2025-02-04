import re

# Llista global per a participants
participants = []

def validar_nom_participant(nom):
    """
    Valida un nom de participant.
    Només s'accepten noms que continguin lletres i espais.
    """
    if re.match(r'^[A-Za-zÀ-ÿ\s]+$', nom):
        return True
    return False

def afegir_participant(nom):
    """
    Afegeix un participant si el nom és vàlid.
    """
    global participants
    if validar_nom_participant(nom):
        participants.append(nom.strip())
        print(f"Participant afegit: {nom}")
    else:
        print("El nom del participant no és vàlid. Ha de contenir només lletres i espais.")

def desar_participants_a_fitxer(participants, fitxer):
    """
    Desa la llista de participants en un fitxer.
    Cada participant s'escriu en una línia diferent.
    """
    try:
        with open(fitxer, 'w', encoding='utf-8') as f:
            for participant in participants:
                f.write(participant + '\n')
        print(f"Llista de participants desada a {fitxer}")
    except Exception as e:
        print(f"Error en desar participants: {e}")

def carregar_participants_de_fitxer(fitxer):
    """
    Carrega la llista de participants des d'un fitxer.
    """
    global participants
    try:
        with open(fitxer, 'r', encoding='utf-8') as f:
            participants = [line.strip() for line in f.readlines()]
        print(f"Participants carregats des de {fitxer}: {participants}")
    except FileNotFoundError:
        print(f"El fitxer {fitxer} no existeix.")
    except Exception as e:
        print(f"Error en carregar participants: {e}")
