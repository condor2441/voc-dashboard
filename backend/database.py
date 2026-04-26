import sqlite3
import os

# 로컬: backend/koovis.db / Fly.io: /app/data/koovis.db (볼륨)
_data_dir = "/app/data" if os.path.isdir("/app/data") else os.path.dirname(__file__)
DB_PATH = os.path.join(_data_dir, "koovis.db")

def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_conn()
    conn.execute("PRAGMA journal_mode=WAL")
    cur = conn.cursor()

    cur.executescript("""
        CREATE TABLE IF NOT EXISTS phones (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            name        TEXT NOT NULL,
            brand       TEXT,
            image_url   TEXT,
            gsmarena_url    TEXT,
            phonearena_url  TEXT,
            created_at  TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS specs (
            id       INTEGER PRIMARY KEY AUTOINCREMENT,
            phone_id INTEGER REFERENCES phones(id),
            category TEXT,
            key      TEXT,
            value    TEXT
        );

        CREATE TABLE IF NOT EXISTS reviews (
            id       INTEGER PRIMARY KEY AUTOINCREMENT,
            phone_id INTEGER REFERENCES phones(id),
            source   TEXT,
            type     TEXT,
            rating   REAL,
            text     TEXT,
            reviewer TEXT,
            date     TEXT
        );

        CREATE TABLE IF NOT EXISTS prices (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            phone_id   INTEGER REFERENCES phones(id),
            source     TEXT,
            price_usd  REAL,
            url        TEXT,
            updated_at TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS briefings (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            content    TEXT NOT NULL,
            market     TEXT,
            created_at TEXT DEFAULT (datetime('now', 'localtime'))
        );

        CREATE TABLE IF NOT EXISTS accounts (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT NOT NULL,
            cash       REAL NOT NULL DEFAULT 0,
            created_at TEXT DEFAULT (datetime('now', 'localtime'))
        );

        CREATE TABLE IF NOT EXISTS portfolio (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER REFERENCES accounts(id),
            ticker     TEXT NOT NULL,
            name       TEXT NOT NULL,
            quantity   REAL NOT NULL,
            avg_price  REAL NOT NULL,
            currency   TEXT NOT NULL DEFAULT 'KRW',
            created_at TEXT DEFAULT (datetime('now', 'localtime'))
        );

        CREATE TABLE IF NOT EXISTS dividends (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id  INTEGER REFERENCES accounts(id),
            ticker      TEXT NOT NULL,
            name        TEXT NOT NULL,
            amount      REAL NOT NULL,
            received_at TEXT DEFAULT (datetime('now', 'localtime'))
        );

        CREATE TABLE IF NOT EXISTS sell_history (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id  INTEGER REFERENCES accounts(id),
            ticker      TEXT NOT NULL,
            name        TEXT NOT NULL,
            quantity    REAL NOT NULL,
            sell_price  REAL NOT NULL,
            avg_price   REAL NOT NULL,
            profit      REAL NOT NULL,
            currency    TEXT NOT NULL DEFAULT 'KRW',
            sold_at     TEXT DEFAULT (datetime('now', 'localtime'))
        );
    """)

    # 기존 테이블 마이그레이션 (컬럼 없으면 추가)
    try:
        conn.execute("ALTER TABLE accounts ADD COLUMN cash REAL NOT NULL DEFAULT 0")
        conn.commit()
    except Exception:
        pass  # 이미 존재하면 무시

    conn.commit()
    conn.close()
    print("DB 초기화 완료")

if __name__ == "__main__":
    init_db()
