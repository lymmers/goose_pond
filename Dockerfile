FROM python:3.8.2-slim-buster

# Allow service to handle stops gracefully
STOPSIGNAL SIGQUIT

# Install pipenv
RUN pip install pipenv

# Install dependencies
COPY Pipfile* ./
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt

# Setup new entry point
COPY entrypoint.sh /entrypoint.sh
COPY manage.py /manage.py
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# Start the GOOSE-server
CMD ["gunicorn", "--preload", "-b", "0.0.0.0:8008", "project.wsgi:application", "--threads", "4", "-w", "2"]