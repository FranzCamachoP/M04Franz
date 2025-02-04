def actualitzar_puntuacions(puntuacions, guanyador):
    """
    Actualitza les puntuacions afegint un punt al guanyador.
    """
    if guanyador in puntuacions:
        puntuacions[guanyador] += 1
        print(f"Puntuació actualitzada: {guanyador} +1 punt.")
    else:
        print(f"Error: El jugador '{guanyador}' no existeix a les puntuacions.")

def calcular_ranquing(puntuacions):
    """
    Calcula el rànquing ordenant els participants per puntuació en ordre descendent.
    Retorna una llista de tuples amb el nom del participant i la seva puntuació.
    """
    ranquing = sorted(puntuacions.items(), key=lambda x: x[1], reverse=True)
    return ranquing
