from flask import Flask, render_template, request, redirect, url_for
from gestio_participants import llistar_participants, afegir_participant
from gestio_partides import generar_partides
from puntuacions import obtenir_puntuacions, actualitzar_puntuacions
from utils import carregar_estat, guardar_estat

# Inicialització de l'aplicació Flask
app = Flask(__name__)

# Ruta principal
@app.route('/')
def index():
    return render_template('index.html')

# Ruta per a gestionar participants
@app.route('/participants', methods=['GET', 'POST'])
def participants():
    if request.method == 'POST':
        nom = request.form['nom']
        if afegir_participant(nom):  # Suposem que afegir_participant valida i afegeix
            return redirect(url_for('participants'))
    participants = llistar_participants()
    return render_template('participants.html', participants=participants)

# Ruta per a gestionar partides
@app.route('/partides')
def partides():
    partides = generar_partides()
    return render_template('partides.html', partides=partides)

# Ruta per a gestionar puntuacions
@app.route('/puntuacions', methods=['GET', 'POST'])
def puntuacions():
    if request.method == 'POST':
        jugador = request.form['jugador']
        punts = int(request.form['punts'])
        actualitzar_puntuacions(jugador, punts)
    puntuacions = obtenir_puntuacions()
    return render_template('puntuacions.html', puntuacions=puntuacions)

# Ruta per al rànquing
@app.route('/ranking')
def ranking():
    puntuacions = obtenir_puntuacions()
    ranking_ordenat = sorted(puntuacions.items(), key=lambda x: x[1], reverse=True)
    return render_template('ranking.html', ranking=ranking_ordenat)

# Ruta per a guardar l'estat del torneig
@app.route('/guardar')
def guardar():
    guardar_estat()
    return redirect(url_for('index'))

# Ruta per a carregar l'estat del torneig
@app.route('/carregar')
def carregar():
    carregar_estat()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
